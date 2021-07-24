import { Dispatch, SetStateAction } from "react";
import { FiSearch } from 'react-icons/fi'
import { CgPokemon } from 'react-icons/cg'
import { Container, SearchBar } from "./styles";

interface ISearchBarProps {
  listLength?: number;
  setSearch: Dispatch<SetStateAction<string>>;
}

export function Search({ listLength, setSearch }: ISearchBarProps) {
  return (
    <Container>
      <SearchBar
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nome do Pokemon"
      />
      {listLength === 1 ? <CgPokemon size={25} color='red'/> : <FiSearch size={25}/>}
    </Container>
  );
}
