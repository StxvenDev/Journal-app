import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { chekingAuthentication, startCheckingGoogle, startLoginWithEmailAndPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'

export const LoginPage = () => {

  const initialForm = {
    email : '',
    password : ''
  }

  const {status, errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {email, password, onInputChange, formState} = useForm({initialForm});
  const isAuthenticating = useMemo(() => status === 'Checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailAndPassword(formState));
  }

  const onGoogleSignIn = (event) => {
    event.preventDefault();
    dispatch(startCheckingGoogle());
    console.log('google signin');
  }

  return (
    <AuthLayout title='Iniciar sesion'>
        <form action="" onSubmit={onSubmit} >
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}} >
              <TextField 
                label='Correo'
                type="email"
                placeholder="correo@mail.com"
                fullWidth
                name='email'
                value={email}
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}} >
              <TextField 
                label='Contraseña'
                type="password"
                placeholder="Contraseña"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid 
                item
                xs={12}
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mb:2 ,mt: 1}}>
              <Grid item xs={ 12 } sm={6} >
                <Button 
                  type='submit' 
                  variant="contained" 
                  fullWidth 
                  disabled={!!isAuthenticating}
                  sx={{ backgroundColor: "secondary.main" }}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={6} >
                <Button 
                  variant="contained" 
                  fullWidth 
                  onClick={onGoogleSignIn}
                  disabled={!!isAuthenticating}
                  sx={{ backgroundColor: "secondary.main" }}
                >
                  <Google />
                  <Typography sx={{ml:1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="end"
          >
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </form>
    </AuthLayout>
  )
}
