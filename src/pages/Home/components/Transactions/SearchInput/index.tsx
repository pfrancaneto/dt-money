import { MagnifyingGlass } from "phosphor-react";
import { SearchInputContainer, SearchTransacion } from "./styles";

export const SearchInput = () => {
  return (
    <SearchInputContainer>
      <SearchTransacion>
        <input placeholder="Busque uma transação" />
        <button>
          <MagnifyingGlass size={20} weight='bold' />
          Buscar
        </button>
      </SearchTransacion>
    </SearchInputContainer>
  );
};