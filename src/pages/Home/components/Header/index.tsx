import {
  CardInformationContent,
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "./styles";
import logoImg from "../../../../assets/logo.png";
import {
  CardInformation,
  CardInformationProps,
} from "../../../../components/CardInformation";

const dados: CardInformationProps[] = [
  {
    title: "Entradas",
    total: "17.400,00",
  },
  {
    title: "Saídas",
    total: "1.259,00",
  },
  {
    title: "Total",
    total: "16.141,00",
  },
];

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
      {/* <CardInformationContent>
        {dados.map((info) => (
          <CardInformation
            key={info.title}
            title={info.title}
            total={info.total}
          />
        ))}
      </CardInformationContent> */}
    </HeaderContainer>
  );
};
