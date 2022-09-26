import styled from '@emotion/styled';
const Container = styled.div`
  text-align: center;
  display: block;
  width: 100%;
  max-width: 250px;
  margin-top: 20px;

  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;
const Description = styled.div`
  padding-top: 40px;
`;
const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border: solid 1px grey;
`;
const Name = styled.p`
  font-weight: 700;
`;
const Tag = styled.p``;
const Location = styled.p``;

const StatsList = styled.ul`
  display: flex;
  justify-content: space-between
  list-style: none;
  padding: 0;
  margin: 0;
  background-color:#afb1b8;
`;
const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 17px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  width: 100%;
`;
const Label = styled.span``;
const Quantity = styled.span``;
export {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
};
