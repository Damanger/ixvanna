import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import '../styles/home.css'

export default function Home(){
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY; // Obtener la posición de desplazamiento vertical
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Calcular la altura total de la página
            const scrolled = (scrollTop / scrollHeight) * 100; // Calcular el porcentaje de desplazamiento

            const scrollWatcher = document.querySelector('.scroll-watcher');
            scrollWatcher.style.width = scrolled + '%'; // Establecer el ancho de la barra de desplazamiento según el porcentaje de desplazamiento
        });
    }, []);
    return(
        <main>
            <div className="scroll-watcher"></div>
            <Banner></Banner>
            <section className="section-container">
                <div className="section-content animate">
                    <div>
                        <h1>Colección 2024</h1>
                        <p className="texto">
                            ¡Descubre nuestra nueva colección del 2024! Sumérgete en el fascinante mundo de la artesanía oaxaqueña y encuentra la pieza perfecta para resaltar tu estilo único. Nuestros aretes bordados a mano son una expresión auténtica de la tradición y la belleza de nuestra cultura. ¡Explora ahora y lleva contigo un pedacito de Oaxaca!
                        </p>
                    </div>
                    <div className="button-container">
                        <Link to="/designs">
                            <button className="disenios" >Ver los diseños</button>
                        </Link>
                    </div>
                    <p className="link2">
                        Explora nuestra colección en nuestro 👉🏼 <a href="https://ixvannadisenos.catalog.kyte.site/" target="_blank" rel="noreferrer">Catálogo</a> 👈🏼.
                    </p>
                </div>
            </section>
            <section className="section-container">
                <div className="section-content animate">
                    <div>
                        <h1>Nuestras clientas nos aman ❤️</h1>
                        <p className="texto">
                            A nuestras clientas les encantan nuestros productos y el servicio que brindamos. Estas son algunas de las reseñas de nuestras felices
                            clientas.
                        </p>
                    </div>
                    <div className="quotes-container animate">
                        <div className="quote-item">
                            <img alt="User 1" height="150" src="./testimonio_1.jpeg" width="150" className="user-image"/>
                            <blockquote className="quote">
                                Me encantan los aretes de Ixvanna Diseños porque son únicos, originales y a muy buen precio!
                            </blockquote>
                            <p className="user-name">- Eyra Ramírez 🇺🇸</p>
                        </div>
                        <div className="quote-item">
                            <img alt="User 2" height="150" src="/placeholder.svg" width="150" className="user-image"/>
                            <blockquote className="quote">
                                I'm really impressed with the quality of the products I received. The shipping was fast and the items were well packaged.
                            </blockquote>
                            <p className="user-name">- Areli Padrón 🇺🇸</p>
                        </div>
                    </div>
                    <div className="button-container">
                        <Link to="/designs">
                            <button className="disenios">Ver los diseños</button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
