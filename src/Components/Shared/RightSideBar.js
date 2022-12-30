import  React, { useContext } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItem,
  Typography,
} from "@mui/material";
import { BadgeButton } from "../../pages/Home/HomeStyled";
import useUsers from "../../hooks/useUsers";
import { AuthContext } from "../Auth/Context/AuthProvider";

export default function RightSideBar() {
  const {user} = useContext(AuthContext)
 const [users] = useUsers()
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem>
        <IconButton>
          <BadgeButton
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="No Photo" src={user?.photoURL} />
          </BadgeButton>
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
         {user?.displayName}
        </Typography>
      </ListItem>
      <Divider />
      <Typography
        ml={3}
        variant="h6"
        sx={{
          fontFamily: "sans",
        }}
      >
        Contacts
      </Typography>
      <Box sx={{ ml: 1 }}>
     {users.map(use =>
         <ListItemButton>
         <ListItemIcon>
        
           {user.email === use.email ?
           <BadgeButton
           overlap="circular"
           anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
           variant="dot"
         >
           <Avatar alt="Remy Sharp" src={use?.image} />
         </BadgeButton> :  <Avatar alt="Remy Sharp" src={use?.image} />
           }
         </ListItemIcon>
         <ListItemText primary={use?.name} />
       </ListItemButton>
      )}
      </Box>
    </List>
  );
}
