import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InputWraper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormInput = styled(Field)`
  display: flex;
  flex-direction: column;
  height: 35px;
  border: 1px solid #cd9fcc;
  border-radius: 6px;
  min-width: 50px;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  padding: 10px;
  align-self: center;
  background: #cd9fcc;
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

// export const Input = styled.input`
//   min-width: 50px;
//   height: 35px;
//   border-radius: 6px;

// `;
