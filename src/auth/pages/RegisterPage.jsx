import {Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email : [(value) => value.includes('@'), 'Ingrese una direccion valida'],
  password : [(value) => value.length >= 6, 'La contraseña debe tener mas de 6 caracteres'],
  displayName : [(value) => value.length >= 1 , 'Su nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'Checking', [status]);

  const {
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return; 
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  }
  return (
    <AuthLayout title="Registrate">
      <form action="" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
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
            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth 
                disabled={!!isCheckingAuthentication}
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Typography sx={{mr:1 }}>¿Ya tienes una cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Inicia sesion
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
