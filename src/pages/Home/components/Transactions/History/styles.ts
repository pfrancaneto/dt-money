import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const HistoryList = styled.div`
  flex: 1;

  table {
    width: 100%;
    min-width: 600px;
    /* border-collapse: collapse; */
  }

  td {
    background: ${({ theme }) => theme['gray-700']};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;