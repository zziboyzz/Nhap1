import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
// import "../styles/fonts.module.css";

const useStyles = makeStyles({
    root: (props) =>({
        width: '100%',
        backgroundColor: props[6],
        minHeight: "1000px",
        padding: "20px 20px 0px 20px",
        fontFamily: "arial",
    }),
  
  })
const NotificationContent = ({posts}) => {
    const classes = useStyles();
    return (

        <Paper className={classes.root} square  style={{ color: "black", textIndent: "40px",
         letterSpacing: "1px", textAlign: "justify",}} >
            {posts}
        </Paper>
    )
}

export default NotificationContent
