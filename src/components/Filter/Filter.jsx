import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { FilterContainer, InputSearch } from './Filter.styled';

const Filter = ({ handleChangeFilter, value }) => {
  return (
    <Formik>
      <FilterContainer>
        <InputSearch
          placeholder="Search Contact"
          value={value}
          onChange={handleChangeFilter}
        />
      </FilterContainer>
    </Formik>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
