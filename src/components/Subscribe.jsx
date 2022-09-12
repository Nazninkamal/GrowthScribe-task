import { Button, Grid, TextField, Typography,  Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useRef } from 'react';


const Subscribe = () => {
   
    return (
        
        <Grid  item xs={4} sm={4} md={5} lg={5} sx={{backgroundColor: "rgb(41 46 63)"}}>
             
           <Container>
            {/* <SearchIcon/> */}
           <Typography sx={{color:"rgb(83 218 178)"}}>SUBSCRIBE AND GET YOUR BONUS!</Typography>
            <Box>
            <form>

<TextField placeholder='Email address' fullWidth size="small"  sx={{backgroundColor:"#494d5c", color: "white", my:1}}/>
<TextField placeholder='First Name' size="small" sx={{backgroundColor:"#494d5c", color: "white"}} />
<TextField placeholder='Last Name' size="small" sx={{backgroundColor:"#494d5c", color: "white", my:1}} />
<TextField placeholder='Address' size="small" sx={{backgroundColor:"#494d5c", color: "white"}} />
<Button type='submit' variant='contained' size='small' fullWidth sx={{background:"rgb(83 218 178)", color:"rgb(255 255 255)", fontWeight:600, my:1, borderRadius:0}}>STAY UPDATED</Button>

 </form> 
            </Box>             
             <Typography variant='body' sx={{color:"rgb(165 169 182)", my:1}}>Your information will never be shared with any third party</Typography>
           </Container>
        </Grid>
    );
};

export default Subscribe;