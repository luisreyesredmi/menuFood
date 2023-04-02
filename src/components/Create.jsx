import style from "./Create.module.css";
import { useNavigate } from "react-router-dom";

const Create = (props) => {
  const navigate = useNavigate();
  const form = document.querySelector("form");
  //console.log(form)

  document.querySelector("div")
    .addEventListener("submit", e => {
      e.preventDefault()
      const data = Object.fromEntries(
        new FormData(e.target)
      )
      let name = document.querySelector("#name").value;
      
      let stock = document.querySelector("#stock").value;
      let price = document.querySelector("#price").value;
      console.log(name, stock, price );
      alert(JSON.stringify(data))
    })

  
    return (
    <form>
        <div className={style.searchName}>
        <input 
            type="text"
            className="form-control"
            id="name"
            placeholder ="Name"  
          />
        
        </div>
        <div className={style.searchDescription}>
        <input 
            type="text"
            className="form-control"
            id="decription"
            placeholder ="Description"  
          />
        </div>
        <div className={style.searchStock}>
        <input 
            type="number"
            className="form-control"
            id="stock"
            placeholder ="Stock"  
          />
        </div>
        <div className={style.searchPrice}>
        <input 
            type="decimal"
            className="form-control"
            id="price"
            placeholder ="Price"  
          />
        </div>
        <div className={style.input}>
        <button type="submit" onClick={() => navigate("/food/"+props.id)}>submit</button>
        </div>
    </form>
    )
}

export default Create;