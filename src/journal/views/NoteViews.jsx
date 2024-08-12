import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"

export const NoteViews = () => {

    const dispatch = useDispatch();
    const { active:note  } = useSelector(state => state.journal);
    const {body, title, onInputChange, formState, date} = useForm( note );
    
    const stringDate = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
      dispatch( setActiveNote(formState) );        
    }, [formState]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }
    

  return (
    <Grid container direction="row" justifyContent="space-between" sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight="light">{ stringDate }</Typography>
        </Grid>
        <Grid item>
            <Button 
                color="primary" 
                sx={{padding:2}}
                onClick={onSaveNote}
            >
                <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>
        <Grid container> 
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingresa un titulo"
                label="Titulo"
                sx={{border:'none',mb:1}}
                name="title"
                value={title}
                onChange={onInputChange}
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Que sucedio hoy?"
                sx={{border:'none',mb:1}}
                minRows={5}
                name="body"
                value={body}
                onChange={onInputChange}
            />
        </Grid>
        {/* Galeria de imagenes */}
        <ImageGallery />
    </Grid>
  )
}
