import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { useGlobalContext } from "../ContextData";

const AccordionForm = (props) => {

   const {accordion_icon, accordion_icon_fn} = useGlobalContext();   

    return(
        <>
        
      <Accordion variant="outlined" sx={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={accordion_icon === true ? <Add /> : <Remove />}
          aria-controls="panel3-content"
          id="panel3-header"
          variant="outlined"
          onClick={accordion_icon_fn}
        >
            <Typography align="center" sx={{width: '100%'}}>{props.accordion_name}</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Save</Button>
        </AccordionActions>
      </Accordion>
        </>
    );
}

export default AccordionForm;