import { StyledTitle, StyledFilter } from './Filter.styled';

export const Filter = ({ items, onChange }) => {
  return <StyledFilter type="string" name="filter" onChange={onChange} />;
};
