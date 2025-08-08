import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Store from './components/Store'
import Auth from './components/Auth'
import './styling/app.css'

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/Auth' element={<Auth/>}/>
                    <Route path='/Store' element={<Store/>}/>
                </Routes>
            </Router>            
        </div>
    )
}

export default App;