import style from "./Content.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";

const Content = (props) => {
  const cont = [
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z"
    }
  ];
  const contMenu = cont.find(({id}) => id === 2);
  console.log(contMenu);

  const contFilter = cont.filter(characters => characters.id === 2);
  console.log(contFilter);
  
  

  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character/";

  

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

  if (characters === undefined) {
    return <p>No encontré la comida que buscabas</p>
  }
  return (
    <section className={style.ContainerContent}>
      <img src={characters.image} width="500" height="325"/>
      <div className={style.ContainerText}>
        <h2 className={style.TheBasicContent}>{characters.name}</h2>
        <p className={style.WordsContent}>{characters.text}</p>
        <div className={style.CostContent}>${characters.precio}</div>
        <div className={style.AmountContent}>
          <button className={style.Icons1}>
            <AiOutlinePlusCircle />
          </button>
          0
          <button className={style.Icons2}>
            <AiOutlineMinusCircle />
          </button>
        </div>
        <button className={style.ADDContent}>ADD TO CART</button>
      </div>
    </section>
  );
};

export default Content;
