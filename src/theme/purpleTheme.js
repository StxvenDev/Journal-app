import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette : {
        primary : {
            main : '#532b88'
        },
        secondary : {
            main : '#9b72cf'
        },
        error : {
            main : red.A400
        }
    }
})