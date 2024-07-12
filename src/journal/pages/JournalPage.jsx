
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout"
import { NoteViews, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

const drawerWidth = 240;

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident soluta fugiat ex! Architecto reiciendis nam molestiae ab, eum distinctio id nihil, praesentium numquam veniam, ipsum assumenda quasi quo enim.</Typography> */}
      <NothingSelectedView />
      {/* <NoteViews /> */}
      <IconButton
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize:30}} />
      </IconButton>
    </JournalLayout>
  )
}
