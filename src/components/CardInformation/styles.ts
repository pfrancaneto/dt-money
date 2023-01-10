import styled from "styled-components";

interface CardInfomationContainerProps {
  colorCard?: string;
  title: string;
}

export const CardInformationContainer = styled.div<CardInfomationContainerProps>`
  width: 100%;
  max-width: 22rem;
  height: 8.5rem;
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme["gray-300"]};
  background: ${(props) =>
    props.title === "Total"
      ? props.theme["green-700"]
      : props.theme["gray-600"]};
  border-radius: 6px;
`;

export const InfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

export const InfoTotal = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme["gray-100"]};
  margin-top: 0.75rem;
`;
