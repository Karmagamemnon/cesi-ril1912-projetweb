import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MuiLink from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(
    (theme) => ({
        content: {
            backgroundColor: "white",
            minHeight: "90vh"
        },
        homeButton: { marginRight: theme.spacing(2) },
        link: { color: "white" },
    })
);

export const Layout = (props) => {

    const classes = useStyles();

    return <Container maxWidth="lg">
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <Link to="/" style={{ color: 'inherit' }}>
                        <HomeIcon fontSize="large" color="inherit" />
                    </Link>
                </IconButton>
                <Typography className={classes.link} variant="h5">
                    <MuiLink color="inherit" underline="none">
                        <Link to="/" style={{ color: 'inherit', textDecoration: "none" }}>
                            Tickets
                        </Link>
                    </MuiLink>
                </Typography>
            </Toolbar>
        </AppBar>
        <Box className={classes.content}>
            {props.children}
        </Box>
    </Container>

}