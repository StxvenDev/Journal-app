import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm';

const formData = {
  email: 'steven@mail.com',
  password: '123',
  displayName: 'steven'
}

const formValidations = {
  email : [(value) => value.includes('@'), 'Ingrese una direccion valida'],
  password : [(value) => value.lenght >= 6, 'La contraseña debe tener mas de 6 caracteres'],
  displayName : [(value) => value.lenght > 1 , 'Su nombre es obligatorio']
}

export const RegisterPage = () => {
  const {
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid,
  } = useForm(formData, formValidations);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }
  return (
    <AuthLayout title="Register">
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
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
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
