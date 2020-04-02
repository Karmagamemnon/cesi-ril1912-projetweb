import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { UrgencyIcon } from './UrgencyIcon';

const useStyles = makeStyles((theme) => ({
    urgencyIcon: { margin: "0 2px 2px" },
    urgencySelect: { flexGrow: 1 }
}));

export const UrgencySelect = (props) => {

    const classes = useStyles();

    return <Grid container direction={props.reverse ? "row-reverse" : "row"} alignItems="flex-end">
        <Grid item className={classes.urgencyIcon}>
            <UrgencyIcon urgency={props.value} />
        </Grid>
        <Grid item className={classes.urgencySelect}>
            <FormControl fullWidth>
                <InputLabel htmlFor="ticket-urgency">Urgence</InputLabel>
                <Select
                    inputProps={{
                        name: "urgency",
                        id: "ticket-urgency",
                    }}
                    native
                    onChange={props.onChange}
                    value={props.value}
                >
                    <option value={1}>Très faible</option>
                    <option value={2}>Faible</option>
                    <option value={3}>Moyenne</option>
                    <option value={4}>Elevée</option>
                    <option value={5}>Très élevée</option>
                </Select>
            </FormControl>
        </Grid>
    </Grid>
}

UrgencySelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    reverse: PropTypes.bool,
    value: PropTypes.number.isRequired
};

UrgencySelect.defaultProps = {
    reverse: false,
    value: 3
};