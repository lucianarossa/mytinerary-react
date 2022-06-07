import React from "react";
import "../styles/calltoaction.css"
import CallImage from "../images/callimage.png"
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import {Link as LinkRouter} from "react-router-dom"

function CallToAction() {
    return(
    
        <div className="call-container">   
           <div className="call-box">
              <h1 className="call-title">If you want to discover the most amazing places around the world</h1>
              <p className="call-description">you are in the right place!</p>

              <LinkRouter to="/construccion" className="Links">
              <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab variant="extended" className="call-button">
               JOIN THE JOURNEY
              </Fab>
              </Box>
              </LinkRouter>
           </div>
           <img className="call-image" src={CallImage} alt="" />
        </div>
        
    )
}

export default CallToAction