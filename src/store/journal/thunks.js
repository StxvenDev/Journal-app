import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote, sePhotosToActiveNote, deleteNoteById } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch(savingNewNote());
        const {uid} = getState().auth;
        const newNote = {
            title: "",
            body: "",
            imageUrls: [],
            date: new Date().getTime()
         };
        

        const newDoc = doc(collection(FirebaseDb, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        // dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        const {uid} = getState().auth;
        if(!uid) throw new error ('El uid del usuario no existe');
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {
        dispatch(setSaving());
        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        const docRef = doc(FirebaseDb, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFirestore, {merge: true});
        dispatch(updateNote(note));
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosUrl = await Promise.all( fileUploadPromises );
        dispatch( sePhotosToActiveNote(photosUrl) );
    }
}

export const startDeletingNote = () =>{ 
    return async( dispatch, getState ) => {
        const {uid} = getState().auth;
        const {active:note} = getState().journal;
        const docRef = doc(FirebaseDb, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
        dispatch( deleteNoteById(note) );
    }
}


