import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';


export const SideBarItem = ({title = '', body, id, date, imageUrls = [] }) => {
    const dispatch = useDispatch();
    const newTitle = useMemo(() => {
        return (title.length > 15)
        ? title.substring(0,15) + '...'
        : title
    }, [title]);
    const selectNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }));
    }
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={selectNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
}
