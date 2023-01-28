import style from "./Header.module.css";

const Index = () => {
    return (
        <nav className={style.ContainerIndex}>
            <ul className={style.TextIndex}>
                <li className={style.WordsIndex}>Home</li>
                <li className={style.WordsIndex}>/Burgers</li>
                <li className={style.WordsIndex}>/TheBasic</li>
            </ul>
        </nav>
    )
}

export default Index;