
import { JournalLayout } from "../layout/JournalLayout"
import { NoteViews, NothingSelectedView } from "../views";

const drawerWidth = 240;

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident soluta fugiat ex! Architecto reiciendis nam molestiae ab, eum distinctio id nihil, praesentium numquam veniam, ipsum assumenda quasi quo enim.</Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteViews />
    </JournalLayout>
  )
}
