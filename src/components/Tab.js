/**
Tab component
**/

import React from 'react';
import {
    withStyles
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return ( <
        Typography component = "div"
        role = "tabpanel"
        hidden = {
            value !== index
        }

        >
        {
            value === index && < Box p = {
                3
            } > {
                children
            } < /Box>} <
            /Typography>
        );
    }
    const styles = theme => ({
        root: {
            backgroundColor: 'transparent'
        },
        tabs: {
            marginBottom: '2%'
        },
        text: {
            textTransform: 'capitalize',
            color: '#1D2951'
        }
    });

    const MuiTab = (props) => {
        const {
            classes
        } = props;
        return ( <
            AppBar position = "static"
            className = {
                classes.root
            } >
            <
            Tabs value = {
                props.value
            }
            onChange = {
                props.onChange
            }
            className = {
                classes.tabs
            }
            aria-label = "simple tabs example" >
            {
                props.tabHeadings.map((heading) => ( <
                    Tab className = {
                        classes.text
                    }
                    label = {
                        heading
                    }
                    />
                ))
            }
            <
            /Tabs>

            {
                props.children.map((child, index) => ( <
                    TabPanel value = {
                        props.value
                    }
                    index = {
                        index
                    } > {
                        child
                    } < /TabPanel>
                ))
            } <
            /AppBar>


        )
    }

    export default withStyles(styles, {
        withTheme: true
    })(MuiTab);