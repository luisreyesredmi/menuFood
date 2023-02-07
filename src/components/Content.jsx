import style from "./Content.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import foods from "../constants/foods";
import { useParams } from "react-router-dom";

const Content = () => {
  const { id } = useParams();

  const myFood = foods.find((food) => food.id === id);

  if (myFood === undefined) {
    return <p>No encontré la comida que buscabas</p>
  }
  return (
    <section className={style.ContainerContent}>
      <img src={myFood.imagen} width="500" height="325"/>
      <div className={style.ContainerText}>
        <h2 className={style.TheBasicContent}>{myFood.name}</h2>
        <p className={style.WordsContent}>{myFood.text}</p>
        <div className={style.CostContent}>${myFood.precio}</div>
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
