import { Fragment } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowItems from "./ShowItems";

const FilterPage = () => {
    const { filterName } = useParams();
    
    const { filterItems } = useSelector((state) => {
      let itemsToFilter = [];
  
      if (filterName === "AllDocs") {
        itemsToFilter = state.Files.userFiles.filter((file) => !file.data.type.startsWith('image'));
      } else if (filterName === "AllImage") {
        itemsToFilter = state.Files.userFiles.filter((file) => file.data.type.startsWith('image'));
      }
      return { filterItems: itemsToFilter };
    }, shallowEqual);
  
  
    return (
      <Fragment>
        {filterItems && filterItems.length > 0 ? (
          <Fragment>
            <ShowItems title={filterName} type="file" items={filterItems} />
          </Fragment>
        ) : (
          <p className="text-center my-5"> Empty Files </p>
        )}
      </Fragment>
    );
  };
  

export default FilterPage;