import React from 'react'
import DocumentContent from "../Component/DocumentContent";
import Grid from '@material-ui/core/Grid';
const tai_lieu = ({posts}) => {
    return (
        <div>
          <Grid container spacing={0} >
            <Grid item xs={false} sm={false} md={3} lg={3} style={{backgroundColor:"#279a97"}} >                        
                </Grid>
                <Grid item container xs={12} sm={12} md={8} lg={8} style={{paddingLeft: "0px"}} >
                     <DocumentContent posts={posts}/>
                </Grid>
                    <Grid item xs={false} sm={false} md={1} lg={1} style={{backgroundColor:"#279a97"}}>

                    </Grid>
            </Grid>   
        </div>
    )
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    const posts = "Một đoạn văn 2 hhahaha"
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
export default tai_lieu
