import React from "react";

class Lists extends React.Component{
    
    strings = ["hola, yo soy, que pasa"];
    
    render(){
        return(
            <div>
                <ul>
                    {this.strings.map((item) => <li key = {item.id}>{item.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Lists;