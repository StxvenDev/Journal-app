import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette : {
        primary : {
            main : '#2a9d8f'
        },
        secondary : {
            main : '#ef233c'
        },
        error : {
            main : red.A400
        }
    }
})