import { useState } from "react";
import { Card } from "../components/Card";
import { CardList } from "../components/CardList";
import { useFetch } from "../hooks/useFetch";
import { Container } from "./styles";

export default function Home() {
  const [limit, setLimit] = useState(10);

  const { pokemonList } = useFetch(`pokemon?offset=0&limit=${limit}`);

  if (!pokemonList) return <h1>Loading...</h1>;

  return (
    <Container>
      <CardList pokemons={pokemonList} />
      <button onClick={() => setLimit(limit + 10)}>load more</button>
    </Container>
  );
}
