import style from "./Header.module.css";
import { MdLocalPizza } from "react-icons/md";
import { RiLeafFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { GiSpoon } from "react-icons/gi";

const Menu = () => {
    return (
        <nav className={style.ContainerMenu}>
            <ul className={style.TextMenu}>
                <li className={style.WordsMenu}><MdLocalPizza />Local Pizzas & Burgers</li>
                <li className={style.WordsMenu}><GiSpoon />Explosion of flavors</li>
                <li className={style.WordsMenu}><RiLeafFill />Carefull sourced</li>
                <li className={style.WordsMenu}><FaShoppingCart/>Free shipping over $25</li>
            </ul>
        </nav>
    )
}

export default Menu;