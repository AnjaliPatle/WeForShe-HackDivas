import React, { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import "./shirts.css";
import ShirtItems from "../ShirtItems/ShirtItems";
import ShirtData from "../Data/ShirtData";

const Shirts = (props) => {
  const [filterData, setFilterData] = useState({ color: [], brand: [] });
  const [data, setData] = useState([]);
  const [filterSelected, setfilterSelected] = useState(false);

  const [sort, setSort] = useState("");

  const updateSort = (value) => {
    setfilterSelected(true);
    setSort(value);
  };

  useEffect(() => {
    const filteredArray = ShirtData.filter((shirt) => {
      if (filterData.color.length === 0 && filterData.brand.length === 0) {
        return ShirtData;
      } else if (filterData.color.length === 0) {
        return filterData.brand.includes(shirt.brand);
      } else if (filterData.brand.length === 0) {
        return filterData.color.includes(shirt.color);
      } else {
        return (
          filterData.color.includes(shirt.color) &&
          filterData.brand.includes(shirt.brand)
        );
      }
    });

    if (sort === "LtoH") {
      filteredArray.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    if (sort === "HtoL") {
      filteredArray.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    setData(filteredArray);
  }, [filterData, sort]);

  const addFilters = (title, filter) => {
    setfilterSelected(true);
    if (title === "Brand") {
      const newArr = [...filterData.brand];
      newArr.push(filter);
      setFilterData({ color: [...filterData.color], brand: newArr });
    }

    if (title === "Color") {
      const newArr = [...filterData.color];
      newArr.push(filter);
      setFilterData({ color: newArr, brand: [...filterData.brand] });
    }
  };

  const removeFilter = (title, filter) => {
    if (title === "Brand") {
      const newArr = [...filterData.brand];
      const index = newArr.indexOf(filter);
      newArr.splice(index, 1);
      setFilterData({ color: [...filterData.color], brand: newArr });
    }

    if (title === "Color") {
      const newArr = [...filterData.color];
      const index = newArr.indexOf(filter);
      newArr.splice(index, 1);
      setFilterData({ color: newArr, brand: [...filterData.brand] });
    }
  };

  return (
    <div className="container">
      <Filter addFilters={addFilters} removeFilter={removeFilter} />
      {props.search ? (
        <ShirtItems
          search={props.search}
          data={props.search}
          updateSort={updateSort}
        />
      ) : (
        <ShirtItems
          search={props.search}
          data={filterSelected ? data : ShirtData}
          updateSort={updateSort}
        />
      )}
    </div>
  );
};

export default Shirts;
