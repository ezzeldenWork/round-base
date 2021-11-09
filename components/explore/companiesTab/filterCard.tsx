import FilterMenus from "../../common/cards/filterMenus";
import { FilterContainer } from "../style";

const FilterCard = () => {
  return (
    <FilterContainer>
      <div className="filter-card">
        <FilterMenus />
      </div>
    </FilterContainer>
  );
};

export default FilterCard;
