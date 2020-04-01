import React from 'react';

import Data from '../../data/data.json'

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Delete from '@material-ui/icons/Delete';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const Tickets = (props) => {

    const classes = useStyles();

    return (
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">!</TableCell>
                        <TableCell align="center">Titre</TableCell>
                        <TableCell align="center">Crée&nbsp;le</TableCell>
                        <TableCell align="center">Catégorie</TableCell>
                        <TableCell align="center">&nbsp;</TableCell>
                        <TableCell align="center">&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Data.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row">
                                {row.index}
                            </TableCell>
                            <TableCell align="center">{row.urgency}</TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.openDate}</TableCell>
                            <TableCell align="center">{row.category}</TableCell>
                            <TableCell align="center">
                                <IconButton color="primary" aria-label="details" href={"/tickets/" + row._id}>
                                    <Visibility />
                                </IconButton >
                            </TableCell>
                            <TableCell align="center">
                                <IconButton color="secondary" aria-label="supprimer" href={"/tickets/" + row._id}>
                                    <Delete />
                                </IconButton >
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
