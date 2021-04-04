import React, { useState } from "react";
import "./filter.css";

const Filters = (props) => {
  const [showmore, setshowmore] = useState(false);
  const [overflow, setoverflow] = useState("hidden");

  const updateFilters = (e) => {
    if (e.target.checked === true) {
      props.addFilters(e.target.name, e.target.id);
    } else {
      props.removeFilter(e.target.name, e.target.id);
    }
  };

  const showItems = () => {
    setshowmore(true);
    setoverflow("overflow");
  };
  return (
    <div className={`filter ${overflow}`}>
      {props.title === "Gender" ? (
        props.data.map((item, idx) => {
          return (
            <div className="filter-item" key={`${item}${idx}`}>
              <input
                type="radio"
                className="checkbox"
                id={item}
                name="radio"
                checked={item === "Men"}
              />
              <label className="type" for={item}>
                {item}
              </label>
            </div>
          );
        })
      ) : (
        <>
          <div className="filter-title">{props.title}</div>
          {props.data.map((item, idx) => {
            if (idx < 7)
              return (
                <div className="filter-item" key={`${item}${idx}`}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    id={item}
                    name={props.title}
                    onChange={(e) => updateFilters(e)}
                  />
                  <label for={item}>{item}</label>
                </div>
              );
          })}

          {props.data.length > 8 && !showmore ? (
            <>
              <span className="showmore" onClick={showItems}>
                +({props.data.length - 8}) more
              </span>
            </>
          ) : (
            props.data.map((item, idx) => {
              if (idx > 7)
                return (
                  <div className="filter-item" key={`${item}${idx}`}>
                    <input
                      type="checkbox"
                      className="checkbox"
                      id={item}
                      name={props.title}
                    />
                    <label for={item}>{item}</label>
                  </div>
                );
            })
          )}
        </>
      )}
    </div>
  );
};

export default Filters;
