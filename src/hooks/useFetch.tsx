// React - Next
import { useState } from "react";

// Contexts and Hooks
import useSWR from "swr";

// Services
import { api } from "../services/api";

// Types
import { IPokemon, ReqData } from "../utils/types/types";

export function useFetch<Data = any, Error = any>(url: string) {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>();

  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const { data } = await api.get(url);
    await loadPokemonData(data.results);

    return data;
  });

  async function loadPokemonData(data: ReqData[]) {
    let _pokemonData = await Promise.all<IPokemon>(
      data.map(async (pokemon) => {
        let pokemonRecord = await api.get(pokemon.url);
        return pokemonRecord.data;
      })
    );
    if (!pokemonList) {
      setPokemonList(_pokemonData);
    } else {
      setPokemonList(pokemonList?.concat(_pokemonData));
    }
  }

  return { data, pokemonList, error };
}
