import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import "./fonts.module.css";
const useStyles = makeStyles({
    root: (props) =>({
        width: '100%',
        backgroundColor: props[6],
        minHeight: "1000px",
        marginTop: "0",
    }),
  
  })
const DocumentContent = ({posts}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.root} square  style={{ color: "black", textIndent: "50px",
         letterSpacing: "2px", textAlign: "justify", fontFamily:"Chango-Regular"}} >
             {posts}
        </Paper>
    )
}

export default DocumentContent
