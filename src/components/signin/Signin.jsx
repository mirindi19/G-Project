import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link2 from "@mui/material/Link";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Paper,
  } from "@mui/material";
import { useSignIn, validate } from './hooks';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signin() {
  const { loading, handleSignIn } = useSignIn()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj = { 
      email: data.get('email'), 
      password: data.get('password'),
    }
    if (validate(obj)) {
      handleSignIn(obj)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #cecece',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup" variant="body2">
                  <Link2>Do not have an account?</Link2>
                </Link>
              </Grid>
            </Grid>
            </Grid>
            { 
              loading ? 
              <Button
              type="submit"
              disabled={true}
              fullWidth
              variant="contained"
              sx={{ height: '50px', mt: 3, mb: 2 }}
            >
              Loading...
            </Button> :
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ height: '50px', mt: 3, mb: 2 }}
            >
            Login
          </Button>
            }
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}