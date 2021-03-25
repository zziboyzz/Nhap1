
import Grid from '@material-ui/core/Grid';
import TinhDiem from "../Component/TinhDiem";
export default function tinh_diem() {
  return (
    <div  style={{position:"static", paddingBottom:"0"}}>
      <Grid container spacing={0} >
            <Grid item xs={false} sm={false} md={3} lg={3} style={{backgroundColor:"#279a97"}} >                        
                </Grid>
                <Grid item container xs={12} sm={12} md={8} lg={8} style={{paddingLeft: "0px",}} >
                     <TinhDiem />
                     
                </Grid>
                    <Grid item xs={false} sm={false} md={1} lg={1} style={{backgroundColor:"#279a97"}}>
                    </Grid>
            </Grid>   
    </div>
  )
}