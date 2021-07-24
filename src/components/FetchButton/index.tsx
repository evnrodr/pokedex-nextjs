import { Dispatch, SetStateAction } from "react";
import { GoPlus } from "react-icons/go";
import { Container } from "./styles";

interface IFetchButtonProps {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
}

export function FetchButton({ limit, setLimit }: IFetchButtonProps) {
  return (
    <Container
      onClick={() => {
        setLimit(limit + 10);
      }}
    >
      <GoPlus size={24} />
      <h3>Load More</h3>
    </Container>
  );
}
