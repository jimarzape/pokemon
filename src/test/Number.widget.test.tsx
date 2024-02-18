// List.widget.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import NumberWidget from "../components/widgets/number/number.widget";
import configuration from "../config/pokemon";
import { widgets } from "../interface";
import { QueryClient, QueryClientProvider } from "react-query";

describe("Number Widget", () => {
  it("renders without crashing", () => {
    const widgets = configuration.columns[1].widgets[0] as widgets;
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <NumberWidget widget={widgets} />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("number-widget")).toBeInTheDocument();
  });

  // Add tests for rendering with items, handling clicks, etc.
});
