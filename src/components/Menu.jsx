import style from "./Menu.module.css";
import { MdLocalPizza } from "react-icons/md";
import { RiLeafFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { GiSpoon } from "react-icons/gi";

const Menu = () => {
    return (
        <nav className={style.ContainerMenu}>
            <ul className={style.TextMenu}>
                <li className={style.WordsMenu}><MdLocalPizza className={style.Icons}/>  Local Pizzas & Burgers</li>
                <li className={style.WordsMenu}><GiSpoon className={style.Icons}/>  Explosion of flavors</li>
                <li className={style.WordsMenu}><RiLeafFill className={style.Icons}/>  Carefull sourced</li>
                <li className={style.WordsMenu}><FaShoppingCart className={style.Icons}/>  Free shipping over $25</li>
            </ul>
        </nav>
    )
}

export default Menu;