import './nav.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default props =>
 <aside className="menu-area">
     
    <nav className="menu"> 
        <Link to="/">
            <i className='fa fa-home'></i> Início
        </Link>
        <Link to="/users">
            <i className='fa fa-users'></i> Usuarios
        </Link>
        <Link to="/sobre">
        <i className='fa fa-sobre'></i> Sobre o site
        </Link>
        <Link to="/mostrar">
        <i className='fa fa-mostrar'></i> Kaigare
        </Link>
        <Link to="/cartas">
        <i className='fa fa-cartas'></i> cartas
        </Link>
        

    </nav>    
     
</aside>