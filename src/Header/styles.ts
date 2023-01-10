import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  background: ${({ theme }) => theme["gray-900"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 80px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  button {
    background: ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme["white"]};
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    cursor: pointer;
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
