import PropTypes from 'prop-types';
import { Item, List, Button } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(item => {
        return (
          <Item key={item.id}>
            <p>{item.name}:</p>
            <p>{item.number}</p>
            <Button type="button" onClick={() => deleteContact(item.id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
