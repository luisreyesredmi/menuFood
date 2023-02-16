import style from "./Grid.module.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Grid = ({}) => {
  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCharacters(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={style.Main} style={{ display: "flex" }}>
      {characters.map((character) => (
        <Card
          nombre={character.name}
          precio={character.id}
          imagen={character.image}
          id={character.id}
        />
      ))}
    </div>
  );
};

export default Grid;
