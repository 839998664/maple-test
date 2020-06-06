import React, { useEffect } from 'react';
import * as actions from '../../Redux/Actions/providerActions';
import Provider from './Provider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
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

function Providers(props) {
    const classes = useStyles();
    useEffect(() => {
        props.actions.fetch_providers();
    }, [props.actions]);

    return <>
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {props.provider && props.provider.providersForSelectedService.map(p => <Provider key={p.id} provider={p}></Provider>)}
            </Grid>
        </div>
    </>;
}

const mapStateToProps = (state) => {
    return {
        provider: state.provider
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            fetch_providers: bindActionCreators(actions.fetch_providers, dispatch),
            filter_providers: bindActionCreators(actions.filter_providers, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Providers);
