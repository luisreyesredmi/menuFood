import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({characters}) => {
  
  const navigate = useNavigate();
  return (
    <div className={style.Card}>
      <img src={characters.imagen} width="236" height="170" />
      <h4 className={style.Text}>{characters.nombre} ${characters.precio}</h4>
      <h4 className={style.Info} onClick={() => navigate("/food/"+characters.id)}>
        LEARN MORE
      </h4>
    </div>
  );
};

export default Card;
