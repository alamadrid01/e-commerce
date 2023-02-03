import React from 'react'
import loginImage from "../../public/login.jpg"
import Router from "next/router";
import Link from 'next/link'
import axios from "axios"
import {
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Paper,
  Grid,
  TextField,
  Input,
  FilledInput,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  Box
} from "@mui/material";
import Image from 'next/image';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const registerHandler = async () => {
    const fullName = lastName + ' ' + firstName;
    const data = {
        fullName,
        email,
        password
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const response = await axios.post('http://localhost:3000/api/register', JSON.stringify(data), config);
        console.log(response.data);
        toast(`Thank you for registering ${fullName}`);
        Router.push('/login');
    }catch(err){
        console.error(err);
        if(err.response.status === 400){
          console.log("Invalid credentials")
        }else if(err.response.status === 500){
          console.log("Server error")
        }else if(err.response.status === 409){
          console.log("Email already exists")
          setError(true)
        }
    }
  }
  return (
    <div>
      <Container maxWidth="lg">
      <ToastContainer />
        <Grid container >
            <Grid item xs={5} container direction='column' justifyContent='center' alignItems='center'>
                <Typography variant="h4" gutterBottom>Aloy Gallery</Typography>
                <Typography variant="h3" color="text.secondary" sx={{ fontWeight:"600", fontSize:"24px" }} gutterBottom>Welcome </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <TextField
        label="First Name"
        id="outlined-start-adornment"
        margin="normal"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
          error={ error}
        />
        <TextField
        label="Last Name"
        id="outlined-start-adornment"
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
          error={ error}
        />
        </Stack>
        <TextField
          label="email address"
          id="outlined-start-adornment"
          fullWidth
          margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={error ? "Email already exist" : ""}
          error={ error}
        />
        <FormControl fullWidth sx={{ my: 5}} variant="outlined" margin="normal">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          error={ error}
          />
        </FormControl>
        <Button variant='contained' fullWidth sx={{backgroundColor: 'primary.main' ,py: 2, color: 'white' }} onClick={registerHandler} disabled={loading}>Sign Up</Button>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
        <Typography variant='subtitle1' color='primary.main' sx={{ fontWeight: '600', fontSize: '15px', textAlign: 'left'}}>
          <Link href='/login'>Log in</Link>
        </Typography>
        <Typography variant='subtitle1' color='primary.main' sx={{ fontWeight: '600', fontSize: '15px', textAlign: 'right'}}>
          <Link href='/forgot-password'>Forget Password?</Link>
        </Typography>
        </Stack>
      </div>
    </Box>
            </Grid>
            <Grid item xs={7} container direction='row' justifyContent='center' alignItems='center'>
                <Image
                width={600}
                height={600}
                src={loginImage}
                alt="login-image"
                />
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Register