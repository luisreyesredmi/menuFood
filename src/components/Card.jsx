import style from "./Grid.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  
  const navigate = useNavigate();
  return (
    <div className={style.Card}>
      <img src={props.imagen} width="236" height="170" />
      <h4 className={style.Text}>{props.nombre} ${props.precio}</h4>
      <h4 className={style.Info} onClick={() => navigate("/food/"+props.id)}>
        LEARN MORE
      </h4>
    </div>
  );
};

export default Card;
