import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSave : '',
        notes: [],
        active: null
    },
    reducers: {
        savingNewNote : (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSave = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => (note.id === action.payload.id) ? action.payload : note);      
            state.messageSave = `${action.payload.title}, actualizada correctamente`      
        },
        sePhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false,                
            state.messageSave = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.notes = state.notes.filter( note => note.id != action.payload.id );
            state.active = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote, 
    clearNotesLogout,
    deleteNoteById, 
    savingNewNote,
    sePhotosToActiveNote,
    setActiveNote, 
    setNotes, 
    setSaving, 
    updateNote, 
} = journalSlice.actions;