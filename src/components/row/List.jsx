import React from "react";

const List = ({ data }) => {
  return (
    <ul>
      {data?.map((item) => (
        <li>{item.title || item.name}</li>
      ))}
    </ul>
  );
};

export default List;
