import style from "./Content.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import foods from "../constants/foods";
import { useParams } from "react-router-dom";


const Content = (props) => {
  const {id} = useParams();
  
  const myFood = foods.find(food => food.id === id);

  console.log(myFood);
  return (
    <section className={style.ContainerContent} style = {{display: "flex"}}>
      <img src= {myFood.imagen} width="490" height="280" />
      <div className={style.ContainerText} right="100px">
        <div className={style.TheBasicContent}>{myFood.name}</div>
        <div className={style.WordsContent}>
          <p>{myFood.text}</p>
        </div>
        <div className={style.CostContent}>${myFood.precio}</div>
        <div className={style.AmountContent}>
          <AiOutlinePlusCircle /> 0 <AiOutlineMinusCircle />
        </div>
        <div className={style.ADDContent}>ADD TO CART</div>
        
      </div>
    </section>
  );
};

export default Content;
