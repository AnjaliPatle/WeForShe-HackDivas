import React from "react";
import "./ShirtItems.css";
import ShirtItem from "./ShirtItem";
import MiniNav from "./Mini-nav";

const ShirtItems = (props) => {
  const data = props.data;

  return (
    <div className="collection-container">
      <MiniNav updateSort={props.updateSort} />
      <ShirtItem data={data} />
    </div>
  );
};

export default ShirtItems;
