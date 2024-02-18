// fetch.test.ts

import { fetchNumberPokemon } from "../services/fetch";

// Ensure jest types are available for mocking
// This might already be in your setupTests.ts or a similar file
// jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());

beforeAll(() => {
  // Cast the global.fetch to jest.Mock
  global.fetch = jest.fn() as jest.Mock;
});

afterEach(() => {
  // Clear all mocks after each test
  jest.resetAllMocks();
});

describe("fetchData", () => {
  it("fetches data successfully", async () => {
    // Use mockImplementationOnce with the correct type
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: "mocked data" }),
      })
    );

    const data = await fetchNumberPokemon(
      "https://pokeapi.co/api/v2/pokemon-color/"
    );
    expect(data).toEqual({ data: "mocked data" });
    expect(global.fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon-color/"
    );
  });

  // Add more tests for error handling, etc.
});
