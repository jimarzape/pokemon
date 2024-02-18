import { listResult, numberResult } from "../interface";

export const fetchPokemon = async (url: string): Promise<listResult> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchNumberPokemon = async (
  url: string
): Promise<numberResult> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
