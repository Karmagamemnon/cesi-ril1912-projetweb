import React from 'react';

import Data from '../../data/data.json'

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AlarmIcon from '@material-ui/icons/Alarm';

import Grid from '@material-ui/core/Grid';

// import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@material-ui/icons/Visibility';
// import Delete from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { UrgencyIcon } from '../UrgencyIcon';

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
}));

export const Tickets = (props) => {
    const classes = useStyles();

    // PANEL
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>

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

            {Data.map((row) => (
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
                                <Grid item xs={12}>
                                    <Typography>Post by {row.requester} - {row.openDate} - For {row.tech}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Status : {row.state}</Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography fontWeight="fontWeightBold" >Description :</Typography>
                                    <Typography>{row.description}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="secondary" href="#contained-buttons">
                                        Supprimer
                                    </Button>
                                </Grid>
                                <Grid item xs={6} align="right">
                                    <Button variant="contained" color="primary" href={"/tickets/" + row._id} >
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
