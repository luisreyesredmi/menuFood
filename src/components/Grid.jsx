import style from "./Grid.module.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import foods from "../constants/foods";

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
      .then((result) => {setCharacters(result.results)})
      .catch((error) => console.log("error", error));
  }, []);

  const foodList = foods.map((item) => (
    <Card
      nombre={item.name}
      precio={item.precio}
      imagen={item.imagen}
      id={item.id}
    />
  ));
  return (
    <div className={style.Main} style={{ display: "flex" }}>
      {characters.map((card) => {
        return (
          <div key={card.id} >
            <h2> {card.name} </h2>
            <img src={card.image} alt={card.name} />
          </div>
        )
      })}
    </div>
  );
};

export default Grid;
