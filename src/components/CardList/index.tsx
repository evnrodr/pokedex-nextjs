// Components
import { Card } from "../Card";

// Types
import { ICardListProps } from "../../utils/types/types";

// Styles
import { Container } from "./styles";

export function CardList({ pokemons }: ICardListProps) {
  return (
    <Container>
      {pokemons?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
}
