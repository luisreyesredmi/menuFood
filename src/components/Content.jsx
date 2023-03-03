import style from "./Content.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";





const Content = ({}) => {
  
  const { id } = useParams();

  const [foods, setFoods] = useState(null);
  const url = "http://localhost:1337/api/foods/"+id+"?populate=*";  

  

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setFoods(result.data.attributes);
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (!foods) {
    return <p>No encontré la comida que buscabas</p>
  }
  return (
    <section className={style.ContainerContent}> 
      
      <img src={"http://localhost:1337"+foods.image.data?.attributes.url} width="500" height="325"/>
      <div className={style.ContainerText}>
        <h2 className={style.TheBasicContent}>{foods.name}</h2>
        <p className={style.WordsContent}>{foods.description}</p>
        <div className={style.CostContent}>${foods.price}</div>
        <div className={style.AmountContent}>
          <button className={style.Icons1}>
            <AiOutlinePlusCircle />
          </button>
          {foods.stock}
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
