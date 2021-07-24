import { IPokemon } from "../../utils/types/types";
import { Container } from "./styles";
import { Card } from "../Card";

interface ICardProps {
  pokemons?: IPokemon[];
}

export function CardList({ pokemons }: ICardProps) {
  return (
    <Container>
      {pokemons?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
}
