import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Services from '../Common/Services';
import Providers from '../Common/pr'
function HomePage(props) {
    return <>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper style={{ height: '100vh' }}>
                    <Services></Services>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ height: '100vh' }}>
                    <Providers></Providers>
                </Paper>
            </Grid>
        </Grid>
    </>
}

export default HomePage;