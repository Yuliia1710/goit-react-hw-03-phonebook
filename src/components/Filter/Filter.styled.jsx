import styled from '@emotion/styled';
import { Field } from 'formik';

export const FilterContainer = styled.div`
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
`;

export const InputSearch = styled(Field)`
  display: flex;
  flex-direction: column;
  height: 35px;
  border: 1px solid #cd9fcc;
  border-radius: 6px;
  min-width: 50px;
`;
