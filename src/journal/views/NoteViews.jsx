import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteViews = () => {

    const dispatch = useDispatch();
    const { active:note, messageSave, isSaving  } = useSelector(state => state.journal);
    const {body, title, onInputChange, formState, date} = useForm( note );
    
    const stringDate = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
      dispatch( setActiveNote(formState) );        
    }, [formState]);

    useEffect(() => {
      if(messageSave.length){
        Swal.fire({
            title: "Guardado exitoso!",
            text: "Tu nota se ha guardado con exito!",
            icon: "success",
            showConfirmButton: false,
            timer: 1200
          })
      }
    }, [messageSave])
    

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({target}) => {
        if( target.files === 0 ) return;
        dispatch(startUploadingFiles(target.files));
    }
    

  return (
    <Grid container direction="row" justifyContent="space-between" sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight="light">{ stringDate }</Typography>
        </Grid>
        <Grid item>

            <input 
                type="file"
                multiple
                ref={ fileInputRef }
                onChange={ onFileInputChange }
                style={{ display:"none" }}
            />

            <IconButton 
                color="primary"
                onClick={ () => fileInputRef.current.click() }
                disabled={isSaving}
            >
                <UploadOutlined />
            </IconButton>

            <Button 
                disabled={isSaving}
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
