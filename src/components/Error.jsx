import React from "react";
import { Link } from "react-router-dom";
import '../styles/error.css'

export default function Error(){
    return(
        <main className="error">
            <div className="error-content">
                <div className="error-title">
                    <h1>Oops! No pudimos encontrar la página que buscas.</h1>
                    <p>La página que buscas no existe.</p>
                </div>
                <div className="button-container">
                    <Link to="/">
                        <button className="disenios" >Regresar a Inicio</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}