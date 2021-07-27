// Types
import { ICardProps } from "../../utils/types/types";

// Styles
import { Container, Image, Content, Badge } from "./styles";

export function Card({ pokemon }: ICardProps) {
  return (
    <Container color={pokemon.types[0].type.name}>
      <Content>
        <h1>Nº: {pokemon.id}</h1>
        <h1>{pokemon.name}</h1>
        <Badge
          src={`/${pokemon.types[0].type.name}.svg`}
          width={36}
          height={36}
        />
      </Content>
      <Image
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
      />
    </Container>
  );
}
