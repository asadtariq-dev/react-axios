import React, { useEffect, useState } from "react";
import axios from "axios";

function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setPersons(res.data);
    });
  });
  return (
    <div>
      <h1>Hello axios</h1>
      <ul>
        {persons.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default PersonList;
