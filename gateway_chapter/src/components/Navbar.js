import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (

        <nav>
            <a href='/'>Home</a>
            <Link to="/about">About</Link>
            <Link to='/boardmembers'>Board Memebers</Link>
        </nav>


    );
}

export default Navbar;