import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import configuration from "./config/pokemon";
import { columns } from "./interface";
import ColumnWidget from "./components/column/index.widget";

function App() {
  const datColumn = configuration.columns as columns[];
  return (
    <div className="App">
      <Container maxWidth={false} sx={{ padding: "5em" }}>
        <Grid container spacing={5}>
          {datColumn.map((column: columns, key: number) => {
            return <ColumnWidget column={column} key={`parent-${key}`} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
