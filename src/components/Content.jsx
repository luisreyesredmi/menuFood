import style from "./Header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import foods from "../constants/foods";
import { useParams } from "react-router-dom";


const Content = (props) => {
  const {id} = useParams();
  
  const myFood = foods.find(food => food.id === id);

  console.log(myFood);
  return (
    <nav className={style.ContainerContent}>
      <img src= {myFood.imagen} width="490" height="280" />
      <ul right="100px">
        <li className={style.TheBasicContent}>{myFood.name}</li>
        <li className={style.WordsContent}>
          <p>
            USA burger, named after our family home. This whole burger brews a
          
            wondefully balanced, all round family recipe, find the ingredients:
          
            The Two Cheese Deluxe 1/3 lb.*double Signature Stackburger has two
            
            100% seaspned real beef patties.</p>
        </li>
        <li className={style.CostContent}>${myFood.precio}</li>
        <li className={style.AmountContent}>
          <AiOutlinePlusCircle /> 0 <AiOutlineMinusCircle />
        </li>
        <li className={style.ADDContent}>ADD TO CART</li>
        
      </ul>
    </nav>
  );
};

export default Content;
