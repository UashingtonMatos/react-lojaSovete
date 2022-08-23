import React from "react";
import { Link } from "react-router-dom";

const Topo = () => (
    <header>
        <div>
            <img src="assets/logo.png" alt="" />

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sabores'>Sabores</Link>
                <Link to='/sobre'>Sobre</Link>
            </nav>
        </div>
    </header>
);

export default Topo;