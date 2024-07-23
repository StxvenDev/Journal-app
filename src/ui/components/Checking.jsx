import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const Checking = () => {
  return (
    <Grid 
        container 
        justifyContent='center'
        alignItems='center'
        spacing={0}
        sx={{minHeight:'100vh', backgroundColor:'primary.main', padding:4}}
    >
        <Grid
            container
            justifyContent='center'
            direction='row'
        >
            <CircularProgress color='warning' />
        </Grid>

    </Grid>
  )
}
