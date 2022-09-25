import styled from '@emotion/styled';
const TransactionTable = styled.table`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
`;
const HeadTable = styled.thead``;
const Th = styled.th`
  background: #bcebdd;
  color: white;
  text-shadow: 0 1px 1px #2d2020;
  padding: 10px 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
`;
const Td = styled.td`
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
  padding: 10px 20px;
  background: #f8e391;
`;

export { TransactionTable, HeadTable, Th, Td };
