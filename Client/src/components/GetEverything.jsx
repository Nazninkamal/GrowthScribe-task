import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img  from '../images/illustration.png';

const GetEverything = () => {
    return (
      <Grid item xs={4} sm={4} md={7} lg={7} sx={{backgroundColor:"rgb(255 255 255)",p:4}}>
      <Typography  sx={{color:"#292e50", fontSize:25, lineHeight:1.2,}}> Get Everything You Need For Creating WordPress Websites</Typography>
        <Box sx={{mt:1, mb:2}}>
          <img src={img} alt=""  width={"63%"} />
        </Box>
       <Typography sx={{color:"rgb(183 172 182)"}}>
         All-in-one Multifunctional Subscribe Service Perfect for Launching All Kinds of WordPress Projects!
         </Typography>
   </Grid>
    );
};

export default GetEverything;
