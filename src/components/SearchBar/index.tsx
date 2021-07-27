// Components
import { FiSearch } from "react-icons/fi";
import { CgPokemon } from "react-icons/cg";

// Types
import { ISearchBarProps } from "../../utils/types/types";

// Styles
import { Container, SearchBar } from "./styles";

export function Search({ listLength, setSearch }: ISearchBarProps) {
  return (
    <Container>
      <SearchBar
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nome do Pokemon"
      />
      {listLength === 1 ? (
        <CgPokemon size={25} color="red" />
      ) : (
        <FiSearch size={25} />
      )}
    </Container>
  );
}
