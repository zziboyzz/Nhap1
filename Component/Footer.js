import React from 'react'
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <div style={{backgroundColor: "red", position: "static",}}>
            <Grid container spacing={0}>
                <Grid item xs={false} sm={false} md={3} lg={3} style={{backgroundColor: "#279a97", color:"white", }}>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} style={{backgroundColor: "#d75d00", color:"white", textAlign: "center"}}>
                    xyaz_team
                </Grid>
                <Grid item xs={false} sm={false} md={1} lg={1} style={{backgroundColor: "#279a97",color:"white"}}>
                        
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer