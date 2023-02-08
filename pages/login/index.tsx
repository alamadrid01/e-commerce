import React from 'react'
import axios from 'axios'
import loginImage from "../../public/login.jpg"
import Router from 'next/router'
import Link from 'next/link'

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

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [password, setPassword] = React.useState("");

    const loginHandler = async () =>{
      setLoading(true)
      const data = {
        email,
        password
      }
      const config = {
        headers : {
          "Content-type": "application/json"
        }
      }
      // const bodyFormData = new FormData()
      // bodyFormData.append("email", email)
      // bodyFormData.append("password", password)
      try{
        const response = await axios.post("http://localhost:3000/api/login", JSON.stringify(data), config)
        if(response.status === 200){
          Router.push("/dashboard")
          setLoading(false)
        }

      }catch(err: any){
        setLoading(false)
        if(err.response.status === 400){
          console.log("Invalid credentials")
        }else if(err.response.status === 500){
          console.log("Server error")
        }else if(err.response.status === 401){
          console.log("Unauthorized")
          setError(true)
        }
      }
    } 

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container >
            <Grid item xs={5} container direction='column' justifyContent='center' alignItems='center'>
                <Typography variant="h4" gutterBottom>Aloy Gallery</Typography>
                <Typography variant="h3" color="text.secondary" sx={{ fontWeight:"600", fontSize:"24px" }} gutterBottom>Welcome Back</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <Typography variant='subtitle1' color='text.secondary' sx={{ fontWeight: '600' }}>Email Address</Typography>
        <TextField
          label="email address"
          id="outlined-start-adornment"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={error ? "Wrong Username or Password" : ""}
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
            onChange={e => setPassword(e.target.value)}
            // helperText={error ? "Wrong Username or Password" : ""}
          error={ error}
          />
        </FormControl>
        <Button variant='contained' fullWidth sx={{backgroundColor: 'primary.main' ,py: 2, color: 'white' }} onClick={loginHandler} disabled={loading} >Log in</Button>
        <Typography variant='subtitle1' color='primary.main' sx={{ fontWeight: '600', fontSize: '15px', textAlign: 'right', my: 2 }}>
          <Link href='/register'>or sign up?</Link>
        </Typography>
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

export default Login