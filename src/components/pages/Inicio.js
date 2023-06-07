import React from "react";
import "./style.css";
// import { Container } from './styles';
import img from "./imagem1.png";
function Inicio() {
  return (
    <div className="conteudo-body">
      <div className="cont-esquerdo">
        
        <p>"Quanto mais avança a tecnologia mais <br></br> 
        respeitado será o ser que se mantiver <br></br>  humano."
          <br></br>by - Marco Aurélio Ferreira
        </p>
        <img src={img} alt="imagem-quadrada"></img>
      
      </div>
      <div className="cont-direito"></div>
    </div>
  );
}

export default Inicio;
