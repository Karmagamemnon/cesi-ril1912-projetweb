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
            <option value={"banana"}>banana</option>
            <option value={"apple"}>apple</option>
            <option value={"peach"}>peach</option>
            <option value={"strawberry"}>strawberry</option>
            <option value={"pineapple"}>pineapple</option>
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