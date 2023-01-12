import { MagnifyingGlass } from "phosphor-react";
import { SearchTransacion, TransactionsContainer } from "./styles";

export const Transaction = () => {
  return (
    <TransactionsContainer>
      <SearchTransacion>
        <input placeholder="Busque uma transação" />
        <button>
          <MagnifyingGlass size={20} weight='bold' />
          Buscar
        </button>
      </SearchTransacion>
    </TransactionsContainer>
  );
};
