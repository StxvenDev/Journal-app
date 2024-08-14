import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch(savingNewNote());
        const {uid} = getState().auth;
        console.log(getState());
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDb, `${uid}/journal/notes`));
        const setDocResp = await setDoc(newDoc, newNote);

        console.log({newDoc, setDocResp});

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
        await fileUpload ( files[0] );
    }
}


