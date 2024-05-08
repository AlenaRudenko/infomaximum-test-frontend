import { useState } from "react"
import { filterItems } from "./constants";
import { StyledFilter, StyledFilterContainer } from "./Filter.styles";
import { SortIcon } from "../../icons/source/sort-icon/SortIcon";

export const Filter = () => {
    const [select, setSelect] = useState(filterItems[0]);
    const handleChange = (e) => {
        setSelect(e.target.value)
    }
    return(
        <StyledFilterContainer>
            <SortIcon />
            <StyledFilter onChange={handleChange} value={select.value}>
                {filterItems.map(i => <option value={i.id} key={i.id}>{i.value}</option>)}
            </StyledFilter>
    </StyledFilterContainer>
    )
}