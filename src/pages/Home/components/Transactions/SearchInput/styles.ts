import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const SearchTransacion = styled.div`
  width: 100%;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 59rem;
    height: 100%;
    border: none;
    border-radius: 6px;
    padding: 1rem;
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-500"]};
  }

  button {
    width: 9.1rem;
    height: 100%;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-weight: 700;
    background: transparent;
    color: ${({ theme }) => theme["green-300"]};
    padding: 0.875rem 2rem;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    border-radius: 6px;
  }
`;
