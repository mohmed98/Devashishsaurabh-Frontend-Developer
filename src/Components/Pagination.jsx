import React from "react";

const Pagination = ({ total, current, onChange }) => {
  const border1 = {
    border: "2px solid blue",
    padding: "2px 6px 2px 6px",
    marginRight: "2px",
    marginBottom: "10px",
  };
  const border2 = {
    border: "2px solid Red",
    padding: "2px 6px 2px 6px",
    marginRight: "2px",
    backgroundColor: "teal",
    marginBottom: "10px",
    color: "white",
  };
  let pages = new Array(total).fill(0).map((a, id) => {
    return (
      <button
        key={id}
        onClick={() => onChange(id + 1)}
        style={id + 1 === +current ? border2 : border1}
        disabled={id + 1 === +current}
      >
        {id + 1}
      </button>
    );
  });
  return <div style={{ textAlign: "center" }}>{pages}</div>;
};

export default Pagination;
