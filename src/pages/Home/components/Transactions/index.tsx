import { History } from "./History";
import { SearchInput } from "./SearchInput";
import { TransactionsContainer } from "./styles";

export const Transaction = () => {
  return (
    <TransactionsContainer>
      <SearchInput />
      <History />
    </TransactionsContainer>
  );
};
