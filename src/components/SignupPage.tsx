import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

import { useAppState } from '../state';
import Nav from './Nav';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    margin: '2em 0 0.1em',
  },
  submit: {
    color: 'black',
    background: 'white',
    margin: '2em 0 0.7em',
    textTransform: 'none',
  },
});

export default function SignupPage() {
  const classes = useStyles();
  const history = useHistory();
  const { signup, loading } = useAppState();

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({ email, name, password });
    history.push('/');
  };

  if (loading) return <div>Creating Your Account</div>;

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" direction="column">
          <Typography variant="h5" align="center" className={classes.title}>
            Sign Up
          </Typography>
          <TextField
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField 
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            className={classes.submit}
            type="submit"
            disabled={!password.length || !email.length || !name.length}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
}
