import React from "react";
import "./index.css";
import CharacterCard from "./components/CharacterCard";

const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    height: "172",
    gender: "male",
    birthYear: "19BBY",
  },

  {
    id: 4,
    name: "Darth Vader",
    height: "202",
    gender: "male",
    birthYear: "41.9BBY",
  },
  {
    id: 5,
    name: "Leia Organa",
    height: "150",
    gender: "female",
    birthYear: "19BBY",
  },
  {
    id: 6,
    name: "Obi-Wan Kenobi",
    height: "182",
    gender: "male",
    birthYear: "57BBY",
  },
  {
    id: 7,
    name: "Yoda",
    height: "66",
    gender: "male",
    birthYear: "896BBY",
  },
];

function App() {
  return (
    <div className="text-white p-6">
      <h1 className="text-4xl text-center mb-10 text-yellow-400">
        SWAPI Characters
      </h1>

      <div className="flex gap-6 overflow-hidden">
        {characters.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
    </div>
  );
}

export default App;
