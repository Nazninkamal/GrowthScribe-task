import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img  from '../images/illustration.png';

const GetEverything = () => {
    return (
      <Grid item xm={4} sm={4} md={7} sx={{backgroundColor:"rgb(255 255 255)", p:5}}>
      <Typography variant='h6' sx={{color:"#292e50"}}> Get Everything You Need for Creating Wordpress Websites</Typography>
     
         <img src={img} alt="" height={"50%"} width={"70%"}/>
         {/* <CardMedia
           component="img"
           alt="complex" src={img}
           width={{md:"70%"}} height={{md:"50%"}} /> */}

     
       <Typography variant='subtitle' sx={{color:"rgb(183 172 182)"}}>All-in-one Multifunctional Subscribe Service Perfect for Launching All Kinds of WordPress Projects!</Typography>
      </Grid>
    );
};

export default GetEverything;