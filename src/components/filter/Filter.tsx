import { memo } from "react";
import { StyledFilter, StyledFilterContainer } from "./Filter.styles";
import { FilterEnum, filterValues, IProps } from "./types";

export const Filter = memo(({ value, onFilterChange }: IProps) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value as FilterEnum);
  };

  return (
    <StyledFilterContainer>
      <StyledFilter onChange={handleFilter} value={value}>
        {Object.values(FilterEnum).map((i) => (
          <option value={i} key={i}>
            {filterValues[i]}
          </option>
        ))}
      </StyledFilter>
    </StyledFilterContainer>
  );
});
