import React from "react";
import Main from "../templates/main";
import kaigare from '../../assets/imgs/kaigare.png'
import Roze from '../../assets/imgs/roze.png'
import './cartas.css'

export default props =>
<Main title="cartas sky strikerr" 
>
    <aside  className="kaigare">
<table className="cartas"  border="3"  >
    <tr>
        <td><img src={kaigare} alt="kaigare" /></td>
        <td><img className="roze" src={Roze} alt="roze" /></td>
        
        </tr>
        <tr>
    <th>
    <a className="button" href="https://www.dimensaoalternativa.com.br/?view=ecom/item&tcg=3&edicao=682&cardID=OP08-EN002&card=8671">
     <button class="btn btn-primary">Saber+++</button>
</a>
    </th>
    <th>
    <a className="button" href="https://www.dimensaoalternativa.com.br/?view=ecom/item&tcg=3&edicao=682&cardID=OP08-EN002&card=8671">
     <button class="btn btn-primary">Saber+++</button>
</a>
</th>
        
    </tr>


</table>
</aside>

</Main>    