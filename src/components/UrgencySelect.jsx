import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export const UrgencySelect = (props) => {

    return <FormControl>
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
}

UrgencySelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

UrgencySelect.defaultProps = {
    value: 3
};