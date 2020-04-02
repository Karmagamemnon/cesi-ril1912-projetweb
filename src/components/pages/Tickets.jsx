import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { UrgencyIcon } from '../UrgencyIcon';

import { TicketController } from '../../data/TicketController';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    header: { paddingRight: "40px" },
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

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    <Box className={classes.search}>
                        <Box className={classes.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'rechercher' }}
                            placeholder="Rechercher..."
                        />
                    </Box>
                    <IconButton aria-label="filtres" color="inherit">
                        <FilterListIcon fontSize="large" />
                    </IconButton >
                    <IconButton aria-label="nouveau-ticket" color="inherit">
                        <Link to="/tickets/new" style={{ color: 'inherit' }}>
                            <AddIcon fontSize="large" />
                        </Link>
                    </IconButton >
                </Toolbar>
            </AppBar>

            <ExpansionPanelSummary
                aria-controls="header-liste"
                id="header-liste"
            >
                <Grid container className={classes.header} spacing={1}>
                    <Grid item xs={1}>
                        <Typography >#</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <WhatshotIcon />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography >Title</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography >Category</Typography>
                    </Grid>
                </Grid>
            </ExpansionPanelSummary>

            {tickets.map((ticket) => (
                <ExpansionPanel key={ticket.index} expanded={expanded === ticket.index} onChange={handleChange(ticket.index)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={"expansion-panel-" + ticket.index}
                        id={"expansion-panel-" + ticket.index}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={1}>
                                <Typography >{ticket.index}</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <UrgencyIcon urgency={ticket.urgency} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography >{ticket.title}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography >{ticket.category}</Typography>
                            </Grid>
                        </Grid>

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.root}>
                            <Grid container spacing={3} >
                                <Grid item xs={12}>
                                    <Typography>Post by {ticket.requester} - {ticket.openDate} - For {ticket.tech}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Status : {ticket.state}</Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography fontWeight="fontWeightBold" >Description :</Typography>
                                    <Typography>{ticket.description}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="secondary" href="#contained-buttons">
                                        Supprimer
                                    </Button>
                                </Grid>
                                <Grid item xs={6} align="right">
                                    <Button variant="contained" color="primary" href={"/tickets/" + ticket.index} >
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