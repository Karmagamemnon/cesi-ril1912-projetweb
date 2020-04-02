import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Redirect } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import frLocale from "date-fns/locale/fr";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import BuildIcon from '@material-ui/icons/Build';
// import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';

import { CategorySelect } from '../CategorySelect';
import { UrgencySelect } from '../UrgencySelect';
import { TicketController } from '../../data/TicketController';

const useStyles = makeStyles((theme) => ({
    marginTop: { marginTop: theme.spacing(2) },
    marginRight: { marginRight: theme.spacing(2) },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2)
    },
}));

export const Ticket = (props) => {

    const classes = useStyles();

    const [ticket, setTicket] = React.useState(TicketController.getTicket(props.match.params.ticketId));
    const [title, setTitle] = React.useState("Nouveau ticket");
    const [redirect, setRedirect] = React.useState(false);

    React.useEffect(() => {
        if (ticket.index > 0)
            setTitle("Ticket #" + ticket.index);
    }, [ticket]);

    const onChangeDatePicker = (prop) => (date, value) => {
        setTicket({ ...ticket, [prop]: value });
    };

    const onChangeInput = (prop, shouldParseInt) => (event) => {
        shouldParseInt = shouldParseInt || false;
        const value = shouldParseInt ? parseInt(event.target.value) : event.target.value;
        setTicket({ ...ticket, [prop]: value });
    };

    const save = () => {
        if (ticket.index > 0) TicketController.updateTicket(ticket);
        else TicketController.addTicket(ticket);
        setRedirect(true);
    };

    return redirect ? <Redirect to="/tickets" /> :
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
            <Box>

                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="tickets">
                            <Link to="/tickets" style={{ color: 'inherit' }}>
                                <ArrowBackIcon fontSize="large" />
                            </Link>
                        </IconButton >
                        <Typography className={classes.title} variant="h5">
                            {title}
                        </Typography>
                        <IconButton color="inherit" aria-label="tickets" onClick={save}>
                            <SaveIcon fontSize="large" />
                        </IconButton >
                    </Toolbar>
                </AppBar>
                <Container>
                    <form noValidate autoComplete="off">

                        <FormControl fullWidth className={classes.marginTop}>
                            <InputLabel htmlFor="ticket-title">Titre</InputLabel>
                            <Input
                                id="ticket-title"
                                onChange={onChangeInput("title")}
                                value={ticket.title}
                            />
                        </FormControl>

                        <Grid container spacing={2} className={classes.marginTop}>

                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth>
                                    <KeyboardDatePicker
                                        label="Date d'ouverture"
                                        format="dd/MM/yyyy"
                                        value={ticket.openDate}
                                        onChange={onChangeDatePicker("openDate")}
                                        KeyboardButtonProps={{
                                            "aria-label": "modifier date d'ouverture",
                                        }}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth>
                                    <KeyboardDatePicker
                                        label="Date de clôture"
                                        format="dd/MM/yyyy"
                                        value={ticket.closeDate}
                                        onChange={onChangeDatePicker("closeDate")}
                                        KeyboardButtonProps={{
                                            "aria-label": "modifier date de clôture",
                                        }}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth>
                                    <UrgencySelect
                                        value={ticket.urgency}
                                        onChange={onChangeInput("urgency", true)}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth>
                                    <CategorySelect
                                        value={ticket.category}
                                        onChange={onChangeInput("category")}
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>

                        <Grid container spacing={2} className={classes.marginTop}>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="ticket-requester">Demandeur</InputLabel>
                                    <Input
                                        id="ticket-requester"
                                        onChange={onChangeInput("requester")}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <RecordVoiceOverIcon />
                                            </InputAdornment>
                                        }
                                        value={ticket.requester}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="ticket-tech">Technicien</InputLabel>
                                    <Input
                                        id="ticket-tech"
                                        onChange={onChangeInput("tech")}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <BuildIcon />
                                            </InputAdornment>
                                        }
                                        value={ticket.tech}
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>

                        <FormControl fullWidth className={classes.marginTop}>
                            <InputLabel htmlFor="ticket-description">Description</InputLabel>
                            <Input
                                id="ticket-description"
                                multiline
                                onChange={onChangeInput("description")}
                                value={ticket.description}
                            />
                        </FormControl>

                    </form>
                </Container>
            </Box>

        </MuiPickersUtilsProvider>

}

Ticket.propTypes = {
    ticket: PropTypes.object.isRequired
};

Ticket.defaultProps = {
    ticket: {
        _id: "5e8467b1140559da1af7942d",
        index: 0,
        openDate: "Sunday, January 27, 2019 8:29 PM",
        closeDate: "Sunday, September 20, 2015 5:37 PM",
        urgency: 3,
        title: "Esse veniam eu eu magna proident et fugiat minim aliqua Lorem voluptate tempor dolore.",
        description: "Et cupidatat amet Lorem veniam pariatur ex sunt officia eiusmod adipisicing ullamco cillum. Tempor quis in eu eiusmod nostrud cupidatat enim nisi. In reprehenderit adipisicing nisi fugiat tempor nisi ullamco cillum minim ipsum deserunt ex ad. Elit exercitation nulla officia voluptate qui consectetur. Tempor velit amet velit eu id ex anim Lorem. Lorem ipsum enim consectetur ex do.",
        state: "Nouveau",
        requester: "Katharine",
        tech: "Britt",
        category: "banana"
    }
};