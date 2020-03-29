/**
The Header component of the Page with the Bluestacks logo
**/

import React from 'react';
import {
    withStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../assets/images/logo.png'

const styles = theme => ({
    root: {
        backgroundColor: '#1D2951'
    },
    logo: {
        height: '10%',
        width: '5%',
        marginLeft: '10%'
    }
});

const MuiHeader = (props) => {
    const {
        classes
    } = props;
    return ( <
        AppBar position = "static"
        className = {
            classes.root
        } >
        < Toolbar >
        <img className = {
            classes.logo
        }
        src = { Logo} alt = "logo" / >
        </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles, {
    withTheme: true
})(MuiHeader);