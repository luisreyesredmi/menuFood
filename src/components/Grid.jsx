import style from "./Grid.module.css";
import Card from "./Card";
import React, { useEffect, useState } from "react";


const Grid = () => {

  const [foods, setFoods] = useState([]);
  const url = "http://localhost:1337/api/foods?populate=*";

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setFoods(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  if (!foods) {
    return <p>No encontré la comida que buscabas</p>
  }

  return (
    <div className={style.Main} style={{ display: "flex" }}>
      {foods.map((food) => (
        <Card
          nombre={food.attributes.name} 
          precio={food.attributes.price}
          imagen={food.attributes.image.data.attributes.url}
          id={food.id}
          key= {food.id}
        />
      ))}
    </div>
  );
};

export default Grid;