import {
  CardInformationContent,
  HeaderContainer,
  HeaderWrapper,
} from "./styles";
import Logo from "../assets/logo.png";
import {
  CardInformation,
  CardInformationProps,
} from "../components/CardInformation";

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
      <HeaderWrapper>
        <div>
          <img src={Logo} alt="Logo" />
          <h2>DT Money</h2>
        </div>
        <button>Nova transação</button>
      </HeaderWrapper>
      <CardInformationContent>
        {dados.map((info) => (
          <CardInformation
            key={info.title}
            title={info.title}
            total={info.total}
          />
        ))}
      </CardInformationContent>
    </HeaderContainer>
  );
};
