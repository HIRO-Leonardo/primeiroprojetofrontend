import './main.css'
import React from 'react'
import Header from './header'
import background from "../../assets/imgs/fundo.png.webp";



export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className='content container-fluid'>
            
        <div className="p-3 mt-3" style={{ backgroundImage: `url(${background})` }}>
                {props.children}

            </div>
        
      
          
        </main>

    </React.Fragment>