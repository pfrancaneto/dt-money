import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["white"]};
  border: 0;
  border-radius: 6px;
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;

export const CardInformationContent = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
