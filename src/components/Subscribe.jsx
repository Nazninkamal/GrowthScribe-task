import { Button, Grid, TextField, Typography,  Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import LockIcon from '@mui/icons-material/Lock';
import { useForm } from 'react-hook-form';
import axios from 'axios';



const Subscribe = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:5000/subscriber', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
   
    return (
        
        <Grid item xs={4} sm={4} md={5} lg={5}  sx={{backgroundColor: "rgb(41 46 63)",textAlign: "start" }}>
                <Box sx={{fontSize:"25px", fontWeight: 900, color:"white", display:"flex", justifyContent:"end"}}><ClearIcon/></Box>
                 <Box sx={{px:4}}>
                    <Typography sx={{color:"rgb(83 218 178)", my:1}}>SUBSCRIBE AND GET YOUR BONUS!</Typography>
             
                <form  onSubmit={handleSubmit(onSubmit)}>
                <Box>

                    <TextField 
                     required
                     id="filled-basic" 
                     inputProps={{ style: { color: 'white'}}} 
                     type="email" {...register("email")}
                     placeholder='Email address' 
                     fullWidth
                     size="small"  
                     sx={{backgroundColor:"#494d5c", my:1, borderRadius:"5px"}} 
                   
                     name="email"
                     />

                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("firstName")}
                     placeholder='First Name' 
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} 
                     name="firstName"
                     />
                    <TextField 
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("lastName")}
                     placeholder='Last Name'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", my:1, borderRadius:"5px"}} 
                     name="lastName"
                     />
                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("address")}
                     placeholder='Address'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} 
                     name="address"/>

                    <Button 
                     type="submit"
                     variant='contained' 
                     size='small' 
                     fullWidth 
                     sx={{background:"rgb(83 218 178)", color:"rgb(255 255 255)", fontWeight:600,borderRadius:"5px",my:2}}>
                    STAY UPDATED
                    </Button>
                    </Box>  
                </form> 
             
              <Box sx={{display:'flex',color:"rgb(165 169 182)"}} >
              <LockIcon />           
             <Typography  sx={{ fontSize:12, fontWeight:500, marginLeft:1, pb:3}}> Your information will never be shared with any third party.</Typography>
             </Box>
             </Box>

             </Grid>
    );
};

export default Subscribe;