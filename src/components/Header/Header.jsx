import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import { positions } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

// data containing routes for header links
const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Add Movie",
        href: "/AddMovie",
    },
]

//header background color
const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#b53d00",
        paddingRight: "79px",
        paddingLeft: "118px",
        paddingBottom: "5px",
        paddingTop: "5px",
        position: "fixed",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        textAlign: "left",
        color: "#FFFEFE"
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        marginRight: "10px"
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
        marginRight: "50px"
      },
}));


export default function Header() {
    //useStyles hook
    const { header, logo, menuButton, toolbar } = useStyles();


    //function displaying header as toolbar
    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {movieSagaLogo}
                <div>{getMenuButtons()}</div>
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

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
            {/* Extra empty tool bar to help content show
            underneath tool App bar */}
            <Toolbar />
        </header>
    )

}