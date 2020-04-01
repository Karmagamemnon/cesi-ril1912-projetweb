import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const Ticket = (props) => {

    return <Box>
        <Typography variant="h3">
            Ticket {props.match.params.ticketId}
        </Typography>
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolores ullam consequatur veritatis reprehenderit ipsa incidunt voluptatibus quae nihil ab, in explicabo. Unde deserunt quidem minus eius, provident fugiat asperiores!
        </Typography>
    </Box>

}
