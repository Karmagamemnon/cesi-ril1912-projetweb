import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const Tickets = (props) => {

    return <Box>
        <Typography variant="h3">
            Liste des tickets
        </Typography>
        <Typography>
            <Box><Link href="/tickets/151" color="inherit">Exemple ticket #151</Link></Box>
            <Box><Link href="/tickets/5" color="inherit">Exemple ticket #5</Link></Box>
            <Box><Link href="/tickets/15567312231" color="inherit">Exemple ticket #15567312231</Link></Box>
        </Typography>
    </Box>

}
