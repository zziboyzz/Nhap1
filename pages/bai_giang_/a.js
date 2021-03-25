import React from 'react'
import Grid from '@material-ui/core/Grid';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
const A = () => {

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  // // for onchange event
  // const [pdfFile, setPdfFile]=useState(null);
  // const [pdfFileError, setPdfFileError]=useState('');

  // // for submit event
  // const [viewPdf, setViewPdf]=useState(null);

  // // onchange event
  // const fileType=['application/pdf'];
  // const handlePdfFileChange=(e)=>{
  //   let selectedFile=e.target.files[0];
  //   console.log(selectedFile)
  //   if(selectedFile){
  //     if(selectedFile&&fileType.includes(selectedFile.type)){
  //       let reader = new FileReader();
  //           reader.readAsDataURL(selectedFile);
  //           reader.onloadend = (e) =>{
  //             setPdfFile(e.target.result);
  //             setPdfFileError('');
  //           }
  //     }
  //     else{
  //       setPdfFile(null);
  //       setPdfFileError('Please select valid pdf file');
  //     }
  //   }
  //   else{
  //     console.log('select your file');
  //   }
  // }

  // // form submit
  // const handlePdfFileSubmit=(e)=>{
  //   e.preventDefault();
  //   if(pdfFile!==null){
  //     setViewPdf(pdfFile);
  //   }
  //   else{
  //     setViewPdf(null);
  //   }
  // }

  return (
    <Grid container>
      <Grid item item xs={false} sm={false} md={3} lg={3} style={{backgroundColor:"#279a97"}} >                        
      </Grid>
      <Grid item container xs={12} sm={12} md={8} lg={8} style={{paddingLeft: "0px", backgroundColor:"white"}} >
        <Grid item xs={12} style={{ minHeight: 80}}></Grid>
        <Grid item container xs = {12} style={{minHeight: "500px"}}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl= '/pdf-open-parameters.pdf'
              plugins={[defaultLayoutPluginInstance]} />
        </Worker>
        </Grid>
      </Grid>
      <Grid item xs={false} sm={false} md={1} lg={1} style={{backgroundColor:"#279a97"}}>

      </Grid>
    </Grid>
  )
}

export default A