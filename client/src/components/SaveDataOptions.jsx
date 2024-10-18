import React from "react";
import { Save } from "@mui/icons-material";
import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useGlobalContext } from "../ContextData";

const SaveDataOptions = () => {

    const {save_data_fn, save_data_options} = useGlobalContext();
    return (
        <>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                
            >
                <ListItemButton onClick={save_data_fn}>
                    <ListItemIcon>
                        <Save />
                    </ListItemIcon>
                    <ListItemText primary="Save and Start New ACE Shipment" />
                    {save_data_options ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={save_data_options} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Save />
                            </ListItemIcon>
                            <ListItemText primary="Save and Start New Shipment" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Save />
                            </ListItemIcon>
                            <ListItemText primary="Save and View Trip Details" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </>
    );
}

export default SaveDataOptions;