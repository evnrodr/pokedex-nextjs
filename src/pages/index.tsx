import { useEffect, useState } from "react";
import { CardList } from "../components/CardList";
import { FetchButton } from "../components/FetchButton";
import { Header } from "../components/Header";
import { Search } from "../components/SearchBar";
import { useFetch } from "../hooks/useFetch";
import { Container, Navigation } from "./styles";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");

  const { pokemonList } = useFetch(`pokemon?offset=${offset}&limit=20`);

  const filteredPokemons = pokemonList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!pokemonList) return <h1>Loading...</h1>;

  return (
    <Container>
      <Header />
      <Navigation>
        <Search setSearch={setSearch} listLength={filteredPokemons?.length} />
        <FetchButton offset={offset} setOffset={setOffset} />
      </Navigation>
      <CardList pokemons={filteredPokemons} />
    </Container>
  );
}
