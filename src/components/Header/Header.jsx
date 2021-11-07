import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles
} from "@material-ui/core";
import React from "react";

export default function Header() {

    //header background color
    const useStyles = makeStyles(() => ({
        header: {
            backgroundColor: "#b53d00",
        },
        logo: {
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            textAlign: "left",
            color: "#FFFEFE"
        }
    })); 

    //useStyles hook
    const { header, logo } = useStyles();


    //function displaying header as toolbar
    const displayDesktop = () => {
        return (
            <Toolbar>
                {movieSagaLogo}
            </Toolbar>
        )
    } //end displayDesktop

    //header content
    const movieSagaLogo = (
        <Typography variant="h5"
            component="h1"
            className={logo}>
            Movie Sagas
        </Typography>
    ) //end const movieSagaLogo


    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    )

}