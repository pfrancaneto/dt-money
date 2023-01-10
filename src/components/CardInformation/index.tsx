import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { CardInformationContainer, InfoHeader, InfoTotal } from "./styles";

export interface CardInformationProps {
  title: string;
  total: string;
  colorCard?: string;
}

export const CardInformation = ({
  title,
  total,
  colorCard,
}: CardInformationProps) => {
  return (
    <CardInformationContainer colorCard={colorCard} title={title}>
      <InfoHeader>
        <div>{title}</div>
        <div>
          {title === "Total" ? (
            <CurrencyDollar size={32} />
          ) : title === "Entradas" ? (
            <ArrowCircleUp size={32} color="#00B37E" />
          ) : (
            <ArrowCircleDown size={32} color="#F75A68" />
          )}
        </div>
      </InfoHeader>
      <InfoTotal>R$ {total}</InfoTotal>
    </CardInformationContainer>
  );
};
