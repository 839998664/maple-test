import React from 'react';
import { ListItem, Button } from '@material-ui/core';

function Service(props) {
    return <ListItem>
        <Button variant="contained" onClick={() => props.selectService(props.service)}>{props.service.attributes.name}</Button>
    </ListItem>;
}

export default Service;