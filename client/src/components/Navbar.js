import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styling/navbar.css'

function Navbar(){

    return(
        <div className='navbar'>
            <Link to="/">
                <a>Landing</a>
            </Link>
            <Link to="/Store">
                <a>Store</a>
            </Link>
            <input></input>
            <button>SEARCH</button>
        </div>
    )
}

export default Navbar;