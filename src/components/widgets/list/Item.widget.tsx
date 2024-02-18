import LoadingWidget from "./Loading.widget";
import { useQuery } from "react-query";
import { basic, listResult, widgets } from "../../../interface";
import { List, ListItemText } from "@mui/material";
import { fetchGenderPokemon } from "../../../services/fetch";

interface props {
  widget: widgets;
}

const ItemWidget = ({ widget }: props) => {
  const { data, error, isLoading, isError } = useQuery<listResult, Error>(
    [widget.title, widget.api],
    () => fetchGenderPokemon(widget.api)
  );

  return (
    <>
      {isLoading ? (
        <LoadingWidget />
      ) : (
        <List>
          {data?.results?.map((item: basic, key: number) => (
            <ListItemText key={`${item.name}-${key}`}>{item.name}</ListItemText>
          ))}
        </List>
      )}
    </>
  );
};

export default ItemWidget;
