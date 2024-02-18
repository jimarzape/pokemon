// List.widget.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import ListWidget from "../components/widgets/list/List.widget";
import configuration from "../config/pokemon";
import { widgets } from "../interface";
import { QueryClient, QueryClientProvider } from "react-query";

describe("List Widget", () => {
  it("renders without crashing", () => {
    const widgets = configuration.columns[0].widgets[0] as widgets;
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <ListWidget widgets={widgets} />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("list-widget")).toBeInTheDocument();
  });

  // Add tests for rendering with items, handling clicks, etc.
});
