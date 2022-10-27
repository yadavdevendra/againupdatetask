import React, { memo, useEffect, useState } from "react";

const ShowDataInTable = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  console.log("table");
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        border: "3px solid whitesmoke",
      }}
    >
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <thead>
          {user.map((users) => (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td>{users.website}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default memo(ShowDataInTable);
