import { Box } from "@mui/material";
import { numberResult, widgets } from "../../../interface";
import LoadingNumber from "./Loading.widget";
import { fetchNumberPokemon } from "../../../services/fetch";
import { useQuery } from "react-query";
import NumberBox from "./box.widget";

interface props {
  widget: widgets;
}

const NumberWidget = ({ widget }: props) => {
  const { data, error, isLoading, isError } = useQuery<numberResult, Error>(
    [widget.title, widget.api],
    () => fetchNumberPokemon(widget.api)
  );
  return (
    <Box padding={1}>
      {isLoading ? (
        <LoadingNumber />
      ) : (
        <NumberBox
          count={Number(data?.pokemon_species_details.length)}
          title={widget.title}
        />
      )}
    </Box>
  );
};

export default NumberWidget;
