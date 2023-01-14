import { HistoryContainer, HistoryList } from "./styles";

export const History = () => {
  return (
    <HistoryContainer>
      <HistoryList>
        <table>
          <tbody>
            <tr>
              <td>Desenvolvimento de Sites</td>
              <td>R$ 12.000,00</td>
              <td align="center">Venda</td>
              <td align="right">13/04/2022</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};