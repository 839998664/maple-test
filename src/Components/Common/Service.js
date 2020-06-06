import React from 'react';
import { ListItem } from '@material-ui/core';

function Service(props) {
    return <ListItem>{props.service.attributes.name}</ListItem>;
}

export default Service;