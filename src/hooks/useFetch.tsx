import { useState } from "react";
import useSWR from "swr";
import { api } from "../services/api";
import { IPokemon, ReqData } from "../utils/types/types";

export function useFetch<Data = any, Error = any>(url: string) {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>();

  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const { data } = await api.get(url);
    await loadPokemonData(data.results);

    return data;
  });

  async function loadPokemonData(data: ReqData[]) {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await api.get(pokemon.url);
        return pokemonRecord.data;
      })
    );
    setPokemonList(_pokemonData);
  }

  return { data, pokemonList, error };
}
