import { Logout, LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogoutFirebase } from "../../store/auth/thunks";

export const NavBar = ({drawerWidth = 270}) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(startLogoutFirebase());
    }
  return (
    <AppBar
        position='fixed'
        sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm:`${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{mr:2, display:{sm:'none'}}}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h6" noWrap component="div">Journal App</Typography>
                <IconButton 
                    color="error"
                    onClick={onLogout}
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
