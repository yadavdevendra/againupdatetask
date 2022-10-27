import React from "react";

const ComponentA = ({ count }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "3px solid whitesmoke",
        }}
      >
        <h1>{Number(count) + 1}</h1>
        <h2>ComponentA</h2>
      </div>
    </>
  );
};

export default ComponentA;
