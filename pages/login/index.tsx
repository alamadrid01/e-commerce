import React from 'react'
import loginImage from "../../public/login.jpg"
import {
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Paper,
  Link,
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
          />
        </FormControl>
        <Button variant='contained' fullWidth sx={{backgroundColor: 'primary.main' ,py: 2 }}>Log in</Button>
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