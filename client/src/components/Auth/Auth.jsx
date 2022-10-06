import React, {useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles';
import Input from './Input';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signin, signup} from '../../actions/auth';

import jwt_decode from 'jwt-decode';

import {GoogleLogin, googleLogout} from "@react-oauth/google";

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState)
    const [isSignUp, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp) {
            dispatch(signup(formData,history))
        } else {
            dispatch(signin(formData,history))
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const switchMode = () => {
        setIsSignup((prevIsSignUp) => !prevIsSignUp)
        handleShowPassword(false);
    }

    const googleSuccess =  async (res) => {
        const result = await jwt_decode(res?.credential);
        const token = res?.credential;
        try {
            dispatch({ type: 'AUTH', data: {result, token}})
            history.push('/')
            // console.log(result)
            // console.log(token)
        } catch (error) {
            console.log(error)
        }
    }

    const googleError = (error) => {
        console.log(error)
        console.log('Google Sign in was unsuccessful. Try again later.')
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input
                                        name='firstName'
                                        label='First Name'
                                        handleChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input
                                        name='lastName'
                                        label='Last Name'
                                        handleChange={handleChange}
                                        half
                                    />
                                </>
                            )
                        }

                        <Input
                            name='email'
                            label='Email Address'
                            handleChange={handleChange}
                            type='email'
                        />

                        <Input
                            name='password'
                            label='Password'
                            handleChange={handleChange}
                            type={showPassword ? 'text' : 'password'}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignUp &&
                            <Input
                                name='confirmPassword'
                                label='Repeat Password'
                                handleChange={handleChange}
                                type='password'
                            />
                        }
                    </Grid>
                    <div style={{maxWidth: '240px', margin: '0 auto'}}>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                    </div>
                    <div style={{maxWidth: '240px', margin: '0 auto', marginBottom: '20px'}}>
                        <GoogleLogin
                            onSuccess={googleSuccess}
                            onError={googleError}
                            theme='filled_blue'
                            text={isSignUp ? "signup_with" : "signin_with"}
                        />
                    </div>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Already have an account? Sign In ": "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
