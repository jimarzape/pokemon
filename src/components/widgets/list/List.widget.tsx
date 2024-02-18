import { List, ListItemText } from "@mui/material";
import { widgets } from "../../../interface";
import ItemWidget from "./Item.widget";

interface props {
  widgets: widgets;
}

const ListWidget = ({ widgets }: props) => {
  return (
    <List dense data-testid="list-widget">
      <ListItemText primary={widgets.title} secondary={widgets.subtitle} />
      <ItemWidget widget={widgets} />
    </List>
  );
};

export default ListWidget;
