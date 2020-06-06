import React from 'react';
import Grid from '@material-ui/core/Grid';
import ServiceProviders from '../Common/ServiceProviders';
function HomePage(props) {

    return <>
        <Grid container spacing={3}>
            <ServiceProviders ></ServiceProviders>
        </Grid>
    </>
}

export default HomePage;