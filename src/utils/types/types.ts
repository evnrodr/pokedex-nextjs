export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IPokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: IPokemonStats[];
  types: IPokemonTypes[];
}

export interface ReqData {
  name: string;
  url: string;
}
