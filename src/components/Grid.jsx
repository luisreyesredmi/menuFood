import style from "./Grid.module.css";
import React from "react";
import Card from "./Card";
import foods from "../constants/foods";
const Grid = () => {
  const foodList = foods.map((item) => (
    <Card
      nombre={item.name}
      precio={item.precio}
      imagen={item.imagen}
      id={item.id}
    />
  ));
  return (
    <main className={style.Main} style={{ display: "flex" }}>
      {foodList}
    </main>
  );
};

export default Grid;
