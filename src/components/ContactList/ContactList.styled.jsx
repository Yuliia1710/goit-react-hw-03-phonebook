import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  align-items: center;
`;
export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 18px;
  background: #cd9fcc;

  padding: 8px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  padding: 10px;
  align-self: center;
  background: ;
  border-style: none;
  border-radius: 6px;
  color: black;
  cursor: pointer;
  &:hover {
    transition: background-color 250ms linear 0s, transform 250ms linear 0s;
    background-color: #f6caca;
    color: white;
  }
`;
