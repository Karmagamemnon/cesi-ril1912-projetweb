import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AlarmIcon from '@material-ui/icons/Alarm';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { UrgencyIcon } from '../UrgencyIcon';

import { TicketController } from '../../data/TicketController';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
        flexGrow: 1,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const Tickets = (props) => {

    const classes = useStyles();

    // PANEL
    const [tickets, setTickets] = React.useState(TicketController.getTickets());
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // DIALOG
    const [open, setOpen] = React.useState(false);

    const [idTicketActif, setIdTicketActif] = React.useState(false);
    const handleClickOpen = (id) => () => {
        setOpen(true);
        setIdTicketActif(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        TicketController.deleteTicket(idTicketActif);
        setOpen(false);
        setTickets(TicketController.getTickets());
    };


    return (
        <div className={classes.root}>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Voulez-vous supprimer le ticket ?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Non
                                            </Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Oui
                                        </Button>
                </DialogActions>
            </Dialog>

            <AppBar position="static">
                <Toolbar>
                    <Box className={classes.search}>
                        <Box className={classes.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Box>
                    <IconButton color="inherit" aria-label="tickets" href="tickets/new">
                        <AddIcon fontSize="large" />
                    </IconButton >
                </Toolbar>
            </AppBar>

            <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <Typography >#</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <AlarmIcon />
                    </Grid>
                    <Grid item xs={8} align="center">
                        <Typography >Title</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography >Category</Typography>
                    </Grid>
                </Grid>
            </ExpansionPanelSummary>

            {tickets.map((row) => (
                <ExpansionPanel expanded={expanded === row.index} onChange={handleChange(row.index)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={1} align="left">
                                <Typography >{row.index}</Typography>
                            </Grid>
                            <Grid item xs={1} align="left">
                                <UrgencyIcon urgency={row.urgency} />
                            </Grid>
                            <Grid item xs={8} align="left">
                                <Typography >{row.title}</Typography>
                            </Grid>
                            <Grid item xs={2} align="center">
                                <Typography >{row.category}</Typography>
                            </Grid>
                        </Grid>

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.root}>
                            <Grid container spacing={3} >
                                <Grid item xs={6}>
                                    <Typography>Demande faite par {row.requester}</Typography>
                                </Grid>
                                <Grid item xs={6} align="right">
                                    <Typography>Le <Moment format="DD/MM/YYYY">
                                        {row.openDate}
                                    </Moment></Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Attribuée à {row.tech}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Statut : {row.state}</Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography fontWeight="fontWeightBold" >Description :</Typography>
                                    <Typography>{row.description}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="secondary" onClick={handleClickOpen(row.index)}>
                                        Supprimer
                                    </Button>

                                </Grid>
                                <Grid item xs={6} align="right">
                                    <Button variant="contained" color="primary" href={"/tickets/" + row.index} >
                                        Modifier
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    );

}
