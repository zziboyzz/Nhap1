import React from 'react'
import LessonContent from "../Component/LessonContent";
import Grid from '@material-ui/core/Grid';
const bai_giang = ({posts}) => {
    return (
        <div style={{height: 600}}>
          <Grid container spacing={0} style={{height:"100%"}}>
            <Grid item xs={false} sm={false} md={3} lg={3} style={{backgroundColor:"#279a97"}} >                        
                </Grid>
                <Grid item container xs={12} sm={12} md={8} lg={8} style={{paddingLeft: "0px", backgroundColor:"#279a97"}} >
                     <LessonContent posts={posts} />
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
    const posts = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5", "Topic 6", "Topic 7", "Topic 8", "Topic 9", "Topic 10"]
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
export default bai_giang
