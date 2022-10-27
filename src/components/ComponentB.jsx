import React from "react";

const ComponentB = ({ count }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "3px solid whitesmoke",
        }}
      >
        <h1>{Number(count) + 2}</h1>
        <h2>ComponentB</h2>
      </div>
    </>
  );
};

export default ComponentB;
