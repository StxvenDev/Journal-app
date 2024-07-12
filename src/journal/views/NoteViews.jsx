import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

export const NoteViews = () => {
  return (
    <Grid container direction="row" justifyContent="space-between" sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight="light">12 de julio, 2024</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding:2}}>
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
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Que sucedio hoy?"
                sx={{border:'none',mb:1}}
                minRows={5}
            />
        </Grid>
        {/* Galeria de imagenes */}
        <ImageGallery />
    </Grid>
  )
}
