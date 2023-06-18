import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Jamshid",
      age: 22,
      skill: "react",
    },
    {
      id: 2,
      name: "Aboji",
      age: 22,
      skill: "react",
    },
    {
      id: 3,
      name: "Janim",
      age: 22,
      skill: "react",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
