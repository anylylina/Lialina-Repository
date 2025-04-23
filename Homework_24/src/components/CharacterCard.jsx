import React from "react";
import luke from "../assets/characters/luke.jpg";
import vader from "../assets/characters/vader.jpg";
import leia from "../assets/characters/leia.jpg";
import yoda from "../assets/characters/yoda.jpg";
import obi from "../assets/characters/obi.jpg";
import "../index.css";
import { formatBirthYear } from "../utils/formatBirthYear";

const characterImages = {
  "Luke Skywalker": luke,
  "Darth Vader": vader,
  "Leia Organa": leia,
  Yoda: yoda,
  "Obi-Wan Kenobi": obi,
};

const CharacterCard = ({ id, name, height, gender, birthYear }) => {
  return (
    <div className="border border-white bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out min-w-[250px] w-60">
      <img
        src={characterImages[name] || defaultImage}
        alt={name}
        className="img-default"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-yellow-300 mb-2">{name}</h2>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Birth Year:</strong> {formatBirthYear(birthYear)}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
