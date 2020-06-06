import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import Services from './Services';
import Providers from './Providers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/providerActions';

function ServiceProviders(props) {
    const selectService = (service) => {
        props.actions.filter_providers(service);
    }
    return <><Grid item xs={12}>
        <Paper >
            <Services selectService={selectService}></Services>
        </Paper>
    </Grid>
        <Grid item xs={12}>
            <Paper >
                <Providers></Providers>
            </Paper>
        </Grid></>;
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            filter_providers: bindActionCreators(actions.filter_providers, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceProviders);
