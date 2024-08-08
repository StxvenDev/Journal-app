
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout"
import { NoteViews, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

const drawerWidth = 240;

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }


  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident soluta fugiat ex! Architecto reiciendis nam molestiae ab, eum distinctio id nihil, praesentium numquam veniam, ipsum assumenda quasi quo enim.</Typography> */}
      {
        (!!active) 
          ? <NoteViews /> 
          : <NothingSelectedView />

      }
      <IconButton
      onClick={onClickNewNote}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
        disabled = {!!isSaving}
      >
        <AddOutlined sx={{fontSize:30}} />
      </IconButton>
    </JournalLayout>
  )
}
