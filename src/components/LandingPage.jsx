import { Box, Button, Container, Grid,TextField, Typography } from '@mui/material';
import React from 'react';

import img from '../images/illustration.png'
import ClearIcon from '@mui/icons-material/Clear';
import LockIcon from '@mui/icons-material/Lock';


const LandingPage = () => {
    return (
        <Box sx={{ border:"rounded", boxShadow:" 5px 10px 18px #888888",
      }} width={{lg:"50%", md:"50%", sm:"80%", xs:"100%"}} height={{lg:"60%" ,md:"60%", sm:"60%", xs:"100%"}}>
             
       <Grid container columns={{ xs: 4, sm: 8, md: 12, lg:12 }} >
            <Grid item xs={4} sm={4} md={7} lg={7} sx={{backgroundColor:"rgb(255 255 255)",p:4}}>
               <Typography  sx={{color:"#292e50", fontSize:25, lineHeight:1.2,}}> Get Everything You Need For Creating WordPress Websites</Typography>
                 <Box sx={{my:2}}>
                   <img src={img} alt=""  width={"63%"} height={"120"} />
                 </Box>
                <Typography sx={{color:"rgb(183 172 182)"}}>
                  All-in-one Multifunctional Subscribe Service Perfect for Launching All Kinds of WordPress Projects!
                  </Typography>
            </Grid>
               

            <Grid item xs={4} sm={4} md={5} lg={5}  sx={{backgroundColor: "rgb(41 46 63)",textAlign: "start"}}>
            {/* <IconButton
        type="submit"
        sx={{
          color: "white",
          fontWeight: "bold",
        }}
       
      >
        <ClearIcon
          sx={{
            fontSize: {
              xs: "25px",
              sm: "30px",
              md: "35px",
            },
          }}
        />
      </IconButton>               */}
      <Box sx={{fontSize:"25px", fontWeight: 700, color:"white", display:"flex", justifyContent:"end"}}><ClearIcon sx={{fontWeight:"bold"}}/></Box>
           <Container>
                <Typography sx={{color:"rgb(83 218 178)", }}>SUBSCRIBE AND GET YOUR BONUS!</Typography>
             
                <form >
                <Box>
                {/* <TextField   inputProps={{ "aria-label": "search school" }}
 fullWidth type="email"  defaultValue="Email address" id="fullWidth"  sx={{backgroundColor:"#494d5c"}}/> */}



                    <TextField inputProps={{ style: { color: 'white'}}} placeholder='Email address' fullWidth size="small"  sx={{backgroundColor:"#494d5c", my:1, borderRadius:"5px"}} />
                    <TextField inputProps={{ style: { color: 'white'}}} placeholder='First Name'  fullWidth size="small" sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} />
                    <TextField inputProps={{ style: { color: 'white'}}} placeholder='Last Name'  fullWidth size="small" sx={{backgroundColor:"#494d5c", my:1, borderRadius:"5px"}} />
                    <TextField inputProps={{ style: { color: 'white'}}} placeholder='Address'  fullWidth size="small" sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} />
                    <Button type='submit' variant='contained' size='small' fullWidth sx={{background:"rgb(83 218 178)", color:"rgb(255 255 255)", fontWeight:600,borderRadius:"5px",my:2}}>STAY UPDATED</Button>
                    </Box>  
                </form> 
             
              <Box sx={{display:'flex',color:"rgb(165 169 182)"}} >
              <LockIcon />           
             <Typography  sx={{ fontSize:12, fontWeight:600, marginLeft:1}}> Your information will never be shared with any third party.</Typography>
             </Box>
             </Container>

             </Grid>
         </Grid>
        </Box>
    );
};

export default LandingPage;

