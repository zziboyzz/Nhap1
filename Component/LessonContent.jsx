import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import NextLink  from 'next/link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: (props) =>({
        width: '100%',
        backgroundColor: props[6],
        // minHeight: "1000px",
        marginTop: "0",
        // borderLeft: "1px solid" + props[2],
        // borderRight: "1px solid" + props[2]
    }),
  
  })
const LessonContent = ({posts}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} square  style={{ color: "black", textIndent: "20px",
         letterSpacing: "2px", textAlign: "justify", borderLeft: "3px solid #d75d00" }} >
         <Grid container style={{width: "100%",  }}>
            <Grid item xs={1}></Grid>
            <Grid item container xs={10}>
         {posts.map((index) => (
             
             <Grid item xs={6} style={{backgroundColor: "white",}} key={index}>
             <NextLink href='/bai_giang_/a'>

                <Paper style={{ margin: 20, padding: 25, cursor: "pointer",
                 textAlign: "center", borderTop: "3px solid #d75d00", backgroundColor: "#d2a544"}}>
                    <span style={{fontSize: "14px", fontFamily: "Arial", color: "white",
                     verticalAlign: "middle"
                     }}><b>{index}</b> </span>
                </Paper>    
                </NextLink>

             </Grid>
        
         )
         )}
         </Grid>
         </Grid>
         {/* <div style={{backgroundColor: "white",  borderTop: "1px solid gray",}}>
               
             </div> */}
        </Paper>
    )
}

export default LessonContent
