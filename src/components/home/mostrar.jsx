import React from "react";
import Main from "../templates/main";
import './mostrar.css'
import kaigare from '../../assets/imgs/kaigare.png'




export default props =>
<Main icon="home" title="Sobre o Site" 
subtitle="Abouts">
<aside  className="kaigare">
     <div className='display-4' >Bem Vindo!!</div>
<div className="container">

   
    <p className="mb-0">
    <a className="kaigare">
            <img src={kaigare} alt="kaigare" />

            <div className="efeito">
    <p>
     1 monstro "Força Celeste - Ás" que não seja de FOGO
    Se este card for Invocado por Invocação-Especial:
    você pode escolher 1 Magia "Força Celeste" no seu Cemitério; adicione-a à sua mão.
    Ganhe 100 de ATK para cada Magia no seu Cemitério. 
    Você só pode Invocar um ou mais "Força Celeste - Ás -
    Kagari" por Invocação-Especial uma vez por turno.
    </p>
    </div>
        </a>
    
    </p>
    
    </div>
    </aside>
</Main> 

