import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { UrgencySelect } from '../UrgencySelect';


const useStyles = makeStyles((theme) => ({
    marginTop: { marginTop: theme.spacing(2) },
    marginRight: { marginRight: theme.spacing(2) },
}));

export const Ticket = (props) => {

    const classes = useStyles();

    const [ticket, setTicket] = React.useState(props.ticket);

    const onChangeInput = (prop) => (event) => {
        setTicket({ ...ticket, [prop]: event.target.value });
    };

    const onChangeDatePicker = (prop) => (date, value) => {
        setTicket({ ...ticket, [prop]: value });
    };

    return <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box>

            <Typography variant="h3">
                Ticket {ticket.index}
            </Typography>

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

                    <Grid item xs={12} sm={4}>
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

                    <Grid item xs={12} sm={4}>
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

                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <UrgencySelect
                                value={ticket.urgency}
                                onChange={onChangeInput("urgency")}
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