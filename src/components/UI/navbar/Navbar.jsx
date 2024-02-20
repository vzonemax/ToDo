import { Link } from "react-router-dom"
import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="navbar__links" to="/about">About us</Link>
            <Link className="navbar__links" to="/post">Posts</Link>
        </div>
    )
}

export default Navbar