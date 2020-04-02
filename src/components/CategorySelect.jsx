import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export const CategorySelect = (props) => {

    return <FormControl>
        <InputLabel htmlFor="ticket-category">Categorie</InputLabel>
        <Select
            inputProps={{
                name: "category",
                id: "ticket-category",
            }}
            native
            onChange={props.onChange}
            value={props.value}
        >
            <option value={"Autre"}>Autre</option>
            <option value={"Bug"}>Bug</option>
            <option value={"Ergonomie"}>Ergonomie</option>
            <option value={"Evolution"}>Evolution</option>
        </Select>
    </FormControl>
}

CategorySelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

CategorySelect.defaultProps = {
    value: "Autre"
};