import React, { useContext } from 'react'
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText ,
  Typography,
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import EmailIcon from "@mui/icons-material/Email";
import AddHomeIcon from "@mui/icons-material/AddHome";
import SchoolIcon from "@mui/icons-material/School";
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import CallIcon from "@mui/icons-material/Call";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import EditIcon from "@mui/icons-material/Edit";
import WcIcon from '@mui/icons-material/Wc';
const PersonalInfoBar = ({profile,setOpen}) => {
  return (
    <Box>
      <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        maxWidth:{md:"80%"},
        ml:2.3,
        py:0.5,
        px:1,
        borderRadius:"4px"
      }}>
        <Typography sx={{
          color:"blueviolet",
          fontWeight:700

        }}>
          Personal Info
        </Typography>
        <Button onClick={()=>setOpen(true)}>
        <EditIcon />Edit
      </Button>
      </Box>
      <List
        
      >
        <ListItemButton >
          <ListItemIcon>
            <HowToRegIcon color='primary'/>
          </ListItemIcon>
          <ListItemText  primary={profile?.name} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText   primary={profile?.email} />
        </ListItemButton>
       {(profile?.phone) &&  <ListItemButton>
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText color='green'  primary={profile?.phone} />
        </ListItemButton>}
        {
          profile?.address && <ListItemButton>
          <ListItemIcon>
            <AddHomeIcon />
          </ListItemIcon>
          <ListItemText  primary={profile?.address} />
        </ListItemButton>
       
        }
         {
          profile?.university && <ListItemButton>
          <ListItemIcon>
            <SchoolIcon color='success' />
          </ListItemIcon>
          <ListItemText  primary={profile?.university} />
        </ListItemButton>
      
         }  
         {
          profile?.school && 
          <ListItemButton>
          <ListItemIcon>
            <DepartureBoardIcon color='purple' />
          </ListItemIcon>
          <ListItemText  primary={profile?.school} />
        </ListItemButton>
         }
         
         {
          profile.gender && <ListItemButton>
          <ListItemIcon>
            {profile.gender === "male" ? <BoyIcon /> : <GirlIcon />}
          </ListItemIcon>
          <ListItemText  primary={profile?.gender} />
        </ListItemButton>
         }
        {
          profile.marriedStatus && 
          <ListItemButton>
          <ListItemIcon>
            {profile.marriedStatus === "Married" ? (
             <WcIcon/>
            ) : profile.gender === "male" ? (
              <BoyIcon />
            ) : (
              <GirlIcon />
            )}
          </ListItemIcon>
          <ListItemText  primary={profile.marriedStatus} />
        </ListItemButton>
        }
        
      </List>
    </Box>
  );
};

export default PersonalInfoBar;
