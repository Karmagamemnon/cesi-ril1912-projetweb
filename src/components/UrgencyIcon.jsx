import React from 'react';
import PropTypes from 'prop-types';
import LensIcon from '@material-ui/icons/Lens';

export const UrgencyIcon = (props) => {

    const getColor = () => {
        switch (props.urgency) {
            case 1: return "lightblue";
            case 2: return "blue";
            case 4: return "orange";
            case 5: return "red";
            default: return "grey";
        }
    }

    return <LensIcon
        fontSize="small"
        style={{ color: getColor() }}
    />
}

UrgencyIcon.propTypes = {
    urgency: PropTypes.number.isRequired
};

UrgencyIcon.defaultProps = {
    urgency: 3
};