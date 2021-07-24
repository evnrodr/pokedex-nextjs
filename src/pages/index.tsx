import { useState } from "react";
import { CardList } from "../components/CardList";
import { FetchButton } from "../components/FetchButton";
import { Header } from "../components/Header";
import { Search } from "../components/SearchBar";
import { useFetch } from "../hooks/useFetch";
import { Container, Navigation } from "./styles";

export default function Home() {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");

  const { pokemonList } = useFetch(`pokemon?offset=0&limit=${limit}`);

  const filteredPokemons = pokemonList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!pokemonList) return <h1>Loading...</h1>;

  return (
    <Container>
      <Header />
      <Navigation>
        <Search setSearch={setSearch} listLength={filteredPokemons?.length} />
        <FetchButton limit={limit} setLimit={setLimit} />
      </Navigation>
      <CardList pokemons={filteredPokemons} />
    </Container>
  );
}
