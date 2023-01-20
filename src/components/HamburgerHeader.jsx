import style from "./Header.module.css";
import { BsPerson } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
const HamburgerHeader = () => {
  return (
    <nav className={style.container}>
      <ul className={style.Words}>
        <li
          className={style.TheStore}
          style={{ color: "#1a252a", fontSize: "40px" }}
        >
          TheStore
        </li>
        <li className={style.Food}>About Us</li>
        <li className={style.Food}>Pizzas</li>
        <li className={style.Food}>Burgers</li>
      </ul>
      <div className={style.SearchIcons}>
        <div className={style.Search}>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Search your order id"
          />
        </div>
        <BsPerson className={style.Icons} />
        <BsCart3 className={style.Icons} />
      </div>
    </nav>
  );
};

export default HamburgerHeader;

