import React, {useState, useEffect} from 'react';
import {AppBar, Avatar, Button, Toolbar, Typography} from "@material-ui/core";
import memories from "../../images/memories.png";
import memoriesLogo from "../../images/memoriesLogo.png";
import memoriesText from "../../images/memories-exp.png";
import {useDispatch} from "react-redux";
import {Link, useHistory, useLocation} from "react-router-dom";
import useStyles from "./styles";
import decode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();

    const logout = () => {
        dispatch({type: 'LOGOUT'})

        history.push('/');
        setUser(null)
    }

    // console.log(user)

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])


    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>

                <Button component={Link} to='/posts'>
                    <img className={classes.image} src={memoriesLogo} alt='memories' height="40px" />
                    <img src={memoriesText} alt="icon" height='45px'/>

                </Button>
            </div>


            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture} >{user.result.name.charAt(0)}</Avatar>
                        {/*<img src={user.result.picture} referrerPolicy="no-referrer" alt=""/>*/}
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                    </div>
                ): (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
