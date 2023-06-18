import React from "react";

export default function Person({ person }) {
  return (
    <div>
      <h2>
        My name is {person.name} and my age is {person.age} also i can code with{" "}
        {person.skill}
      </h2>
    </div>
  );
}
