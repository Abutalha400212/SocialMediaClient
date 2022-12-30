import * as React from 'react';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import DraftsIcon from '@mui/icons-material/Drafts';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
export default function LeftSideBar() {
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <RssFeedIcon />
        </ListItemIcon>
        <ListItemText primary="Feed" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleAltRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PlayCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Videos" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Groups2RoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Group" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BookmarksRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Bookmark" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EventNoteRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Events" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WorkRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Jobs" />
      </ListItemButton>
    </List>
  );
}