import React from "react";
import Filters from "./Filters";

const Types = ["Men", "Women", "Boys", "Girls"];

const Colors = ["Blue", "Lightblue", "Grey", "Black"];

const Brand = [
  "HIGHLANDER",
  "Dennis-Lingo",
  "Mast&Harbour",
  "HERENOW",
  "Nautica",
  "Campus-Sutra",
  "ColorPlus",
  "Raymond",
  "abc",
  "sadn",
  "sadn",
];

const Filter = (props) => {
  return (
    <div className="filter-container">
      <div className="f-title">FILTERS</div>
      <Filters
        title="Gender"
        data={Types}
        addFilters={props.addFilters}
        removeFilter={props.removeFilter}
      />
      <Filters
        title="Color"
        data={Colors}
        addFilters={props.addFilters}
        removeFilter={props.removeFilter}
      />
      <Filters
        title="Brand"
        data={Brand}
        addFilters={props.addFilters}
        removeFilter={props.removeFilter}
      />
    </div>
  );
};

export default Filter;
