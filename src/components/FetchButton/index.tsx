// Components
import { GoPlus } from "react-icons/go";

// Types
import { IFetchButtonProps } from "../../utils/types/types";

// Styles
import { Container } from "./styles";

export function FetchButton({ offset, setOffset }: IFetchButtonProps) {
  return (
    <Container
      onClick={() => {
        setOffset(offset + 20);
      }}
    >
      <GoPlus size={24} />
      <h3>Load More</h3>
    </Container>
  );
}
