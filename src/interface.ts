export interface widgets {
  title: string;
  subtitle?: string;
  type: "list" | "number";
  api: string;
}

export interface columns {
  size: number;
  heading: string;
  widgets: widgets[];
}

export interface basic {
  name: string;
  url: string;
}

export interface species_details {
  species: basic;
  rate: number;
}

export interface numberResult {
  id: number;
  name: string;
  pokemon_species_details: species_details[];
}

export interface listResult {
  count: number;
  next: number | null;
  previous: number | null;
  results: basic[];
}
