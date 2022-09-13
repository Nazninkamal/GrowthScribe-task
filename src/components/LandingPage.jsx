import { Box, Grid} from '@mui/material';
import React from 'react';

import GetEverything from './GetEverything';
import Subscribe from './Subscribe';


const LandingPage = () => {
    return (
        <Box sx={{ border:"rounded", boxShadow:" -4px 40px 45px -4px rgba(136,136,136,0.76) ",
      }} width={{lg:"50%", md:"50%", sm:"80%", xs:"100%"}} >
             
       <Grid container columns={{ xs: 4, sm: 8, md: 12, lg:12 }} >
         <GetEverything/>
         <Subscribe/>
                   
         </Grid>
        </Box>
    );
};

export default LandingPage;

