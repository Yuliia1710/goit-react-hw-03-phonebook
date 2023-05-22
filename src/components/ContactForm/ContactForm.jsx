import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  FormContainer,
  InputWraper,
  FormInput,
  Button,
} from './ContactForm.styled';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'too short')
    .max(10, 'too long'),
});

export default class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  onSubmitForm = (value, { resetForm }) => {
    const newContact = {
      id: nanoid(4),
      ...value,
    };
    this.props.addContact(newContact);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.onSubmitForm}
        validationSchema={schema}
      >
        <FormContainer>
          <InputWraper>
            <label htmlFor="name">
              Name
              <FormInput type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </label>

            <label htmlFor="number">
              Number
              <FormInput type="tel" name="number" />
              <ErrorMessage name="number" component="div" />
            </label>
          </InputWraper>
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </Formik>
    );
  }
}

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };
