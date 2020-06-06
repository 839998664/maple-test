import React from 'react';
import { ListItem } from '@material-ui/core';

function Provider(props) {
    return <ListItem>{props.provider.attributes.name}</ListItem>;
}

export default Provider;