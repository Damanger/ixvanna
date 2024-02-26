import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'
import '../styles/navbar.css';

export default function Navbar(){
    const [activeStyle, setActiveStyle] = useState({}); // Estado para el estilo activo
    const location = useLocation(); // Hook para obtener la ubicación actual

    // Efecto para actualizar el estilo activo cuando cambia la ubicación
    useEffect(() => {
        if (location.pathname === "/") {
            setActiveStyle({ borderBottom: "0.2rem solid white" });
        } else if (location.pathname === "/designs") {
            setActiveStyle({ borderBottom: "0.2rem solid white" });
        } else {
            setActiveStyle({});
        }
    }, [location]);

    const mensaje = encodeURIComponent("Hola, buen día, quisiera información sobre unos aretes :)");

    return(
        <header className="cabecera">
            <nav className='navbar-nav'>
                <NavLink to='/' className='navbar-nav-link'>
                    <img src="./ixvanna_titulo.jpeg" alt="Ixvanna" />
                </NavLink>
                <div className='navbar-right-links'>
                    <NavLink to='/' activeclassname="activo" className='navbar-nav-link' style={location.pathname === "/" ? activeStyle : {}}>
                        Inicio
                    </NavLink>
                    <NavLink to='/designs' activeclassname="activo" className='navbar-nav-link' style={location.pathname === "/designs" ? activeStyle : {}}>
                        Diseños
                    </NavLink>
                    <SocialIcon url="https://www.facebook.com/Ixvanna?mibextid=kFxxJD" className="redes" target="_blank" fgColor="#fff" style={{height:28, width:28}}></SocialIcon>
                    <SocialIcon url={`https://wa.me/529511943244?text=${mensaje}`} network="whatsapp" className="redes" target="_blank" fgColor="#fff" style={{height:28, width:28}}></SocialIcon>
                    <SocialIcon url="https://www.instagram.com/ixvannadisenos?igsh=MWtmb2MwbDFldTh1Ng==" className="redes" target="_blank" fgColor="#fff" style={{height:28, width:28}}></SocialIcon>
                </div>
            </nav>
        </header>
    )
}
