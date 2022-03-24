import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router'

import Routers from './Routers'
import Logo from '../components/templates/logo'
import Nav from '../components/templates/nav'
import Footer from '../components/templates/footer'

export default props =>
<BrowserRouter>
<div className="app">
    <Logo />
    <Nav />
    <Routers />
    <Footer />
</div>
</BrowserRouter>

