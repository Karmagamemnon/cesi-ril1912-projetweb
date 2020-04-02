import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { CategorySelect } from './CategorySelect';
import { UrgencySelect } from './UrgencySelect';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    container: { padding: "20px" },
    paper: { minWidth: "25vw" }
}));

export const DrawerFiltres = (props) => {

    const classes = useStyles();

    const [category, setCategory] = React.useState("Autre");
    const [urgency, setUrgency] = React.useState(3);

    const onChangeCategory = () => (event) => {
        setCategory(event.target.value);
    };

    const onChangeUrgency = () => (event) => {
        setUrgency(parseInt(event.target.value));
    };

    const applyFilters = () => { };

    return <Drawer
        anchor="right"
        classes={{ paper: classes.paper }}
        onClose={props.onClose}
        open={props.isOpen}
    >
        <Grid className={classes.container} container direction="column" spacing={1}>
            <Typography variant="h5">Filtres</Typography>
            <CategorySelect
                onChange={onChangeCategory}
                value={category}
            />
            <UrgencySelect
                onChange={onChangeUrgency}
                reverse
                value={urgency}
            />
            <Box>
                <IconButton aria-label="filtrer" onClick={applyFilters}>
                    <CheckIcon fontSize="large" />
                </IconButton >
                <IconButton aria-label="filtrer" onClick={props.onClose}>
                    <CloseIcon fontSize="large" />
                </IconButton >
            </Box>
        </Grid>
    </Drawer>
}

DrawerFiltres.propTypes = {
    isOpen: PropTypes.bool
};

DrawerFiltres.defaultProps = {
    isOpen: false
};