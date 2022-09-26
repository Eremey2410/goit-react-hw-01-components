import styled from '@emotion/styled';
const StatisticsSection = styled.section`
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  text-align: center;
  width: 500px;
  margin: 50px auto;
`;
const Title = styled.h2`
  margin: 0;
  padding: 20px 0;
`;
const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;

  width: 100%;
  background-color: #afb1b8;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;
const Label = styled.span``;
const Percentage = styled.span``;

export { StatisticsSection, Title, StatList, Item, Label, Percentage };
