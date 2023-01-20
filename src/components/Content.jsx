import style from "./Header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import foods from "../constants/foods";

const foodImages = require.context("../assets", true);

const Content = (props) => {
  return (
    <nav className={style.ContainerContent}>
      <img src="Hamburguesa1.jpg" width="480" height="300" />
      <ul right="100px">
        <li className={style.TheBasicContent}>TheBasic</li>
        <li className={style.WordsContent}>
          <p>
            USA burger, named after our family home. This whole burger brews a
          </p>
          <p>
            wondefully balanced, all round family recipe, find the ingredients:
          </p>
          <p>
            The Two Cheese Deluxe 1/3 lb.*double Signature Stackburger has two
          </p>
          <p>100% seaspned real beef patties.</p>
        </li>
        <li className={style.CostContent}>$12.4</li>
        <li className={style.AmountContent}>
          <AiOutlinePlusCircle />0<AiOutlineMinusCircle />
        </li>
        <li className={style.ADDContent}>ADD TO CART</li>
      </ul>
    </nav>
  );
};

export default Content;
