import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    (theme) => ({
        homeButton: { marginRight: theme.spacing(2) },
        link: { color: "white" },
    })
);

export const Layout = (props) => {

    const classes = useStyles();

    return <Container maxWidth="md">
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu" href="/">
                    <HomeIcon fontSize="large" color="inherit" />
                </IconButton>
                <Typography className={classes.link} variant="h5">
                    <Link href="/tickets" color="inherit" underline="none">
                        Tickets
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        {props.children}
    </Container>

}