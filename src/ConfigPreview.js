import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ColorizeIcon from '@material-ui/icons/Colorize';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

export default function ConfigPreview(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List>
                <ListItem button key={'function'}>
                    <ListItemIcon>
                        <FiberNewIcon />
                    </ListItemIcon>
                    <ListItemText primary={'需求功能'}>
                    </ListItemText>
                    <ListItemText primary={props.customFunction}>
                    </ListItemText>
                </ListItem>

                <Divider></Divider>

                <ListItem button key={'layout'}>
                    <ListItemIcon>
                        <BorderAllIcon />
                    </ListItemIcon>
                    <ListItemText primary={'采取的布局'}>
                    </ListItemText>
                    <ListItemText primary={props.design["layout"][0]}>
                    </ListItemText>
                </ListItem>

                <Divider></Divider>

                <ListItem button key={'navigation'}>
                    <ListItemIcon>
                        <CallSplitIcon />
                    </ListItemIcon>
                    <ListItemText primary={'导航模式'}>
                    </ListItemText>
                    <ListItemText primary={props.design["navigate"][0]}>
                    </ListItemText>
                </ListItem>

                <Divider></Divider>

                <ListItem button key={'colorPrimary'} >
                    <ListItemIcon>
                        <ColorizeIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Primary Color'}>
                    </ListItemText>
                    <Box bgcolor={props.primaryColor} p={2} m={1}>
                    </Box>
                </ListItem>

                <Divider></Divider>

                <ListItem button key={'colorSecondary'}>
                    <ListItemIcon>
                        <ColorizeIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Secondary Color'}>
                    </ListItemText>
                    <Box bgcolor={props.secondaryColor} p={2} m={1}>
                    </Box>
                </ListItem>

                <Divider></Divider>

            </List>
        </div>


    );
}