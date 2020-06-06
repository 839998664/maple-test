import React, { useEffect } from 'react';
import * as actions from '../../Redux/Actions/serviceActions';
import Service from './Service';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
function Services(props) {
    const classes = useStyles();
    useEffect(() => {
        props.actions.fetch_services();

    }, [props.actions]);

    return <>
        <div className={classes.root}>
            <List size="large" variant="text" color="primary" aria-label="text primary button group">
                {props.service && props.service.services.map(s =>
                    <Service selectService={props.selectService} key={s.id} service={s}></Service>)}
            </List>
        </div>
    </>;
}

const mapStateToProps = (state) => {
    return {
        service: state.service
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            fetch_services: bindActionCreators(actions.fetch_services, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Services);