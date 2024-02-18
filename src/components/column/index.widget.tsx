import { Box, Grid } from "@mui/material";
import { columns, widgets } from "../../interface";
import ListWidget from "../widgets/list/List.widget";
import NumberWidget from "../widgets/number/number.widget";
import { QueryClient, QueryClientProvider } from "react-query";

interface props {
  column: columns;
  key: string;
}

const queryClient = new QueryClient();

const ColumnWidget = ({ column, key }: props) => {
  return (
    <Grid item xs={column.size} md={2 * column.size} lg={2 * column.size}>
      <Box sx={{ p: 3, bgcolor: "#cdcdcd", minHeight: "70vh" }}>
        {column.heading}
        <Grid container spacing={2}>
          {column.widgets.map((widget: widgets, key: number) => {
            return (
              <>
                {widget.type === "list" ? (
                  <Grid item lg={12} md={6} key={`-grid-list-${key}`}>
                    <QueryClientProvider client={queryClient}>
                      <ListWidget widgets={widget} key={`list-${key}`} />
                    </QueryClientProvider>
                  </Grid>
                ) : (
                  <Grid item xs={12} sm={6} md={6}>
                    <QueryClientProvider client={queryClient}>
                      <NumberWidget
                        widget={widget}
                        key={`grid-number-${key}`}
                      />
                    </QueryClientProvider>
                  </Grid>
                )}
              </>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
};

export default ColumnWidget;
