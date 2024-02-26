import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import '../styles/home.css'

export default function Home(){
    return(
        <main>
            <Banner></Banner>
            <img src="" alt="x" />
            <section className="section-container">
                <div className="section-content">
                    <div>
                        <h1>Colección 2024</h1>
                        <p>
                            ¡Descubre nuestra nueva colección del 2024! Sumérgete en el fascinante mundo de la artesanía oaxaqueña y encuentra la pieza perfecta para resaltar tu estilo único. Nuestros aretes bordados a mano son una expresión auténtica de la tradición y la belleza de nuestra cultura. ¡Explora ahora y lleva contigo un pedacito de Oaxaca!
                        </p>
                    </div>
                    <div className="button-container">
                        <Link to="/designs">
                            <button className="disenios" >Ver los diseños</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section-container">
                <div className="section-content">
                    <div>
                        <h1>Nuestras clientas nos aman ❤️</h1>
                        <p>
                            A nuestras clientas les encantan nuestros productos y el servicio que brindamos. Estas son algunas de las reseñas de nuestras felices
                            clientas.
                        </p>
                    </div>
                    <div className="quotes-container">
                        <div className="quote-item">
                            <img alt="User 1" height="150" src="/placeholder.svg" width="150" className="user-image"/>
                            <blockquote className="quote">
                                The products are amazing and the customer service is excellent. I will definitely be shopping here again.
                            </blockquote>
                            <p className="user-name">- Eyra Ramírez 🇺🇸</p>
                        </div>
                        <div className="quote-item">
                            <img alt="User 2" height="150" src="/placeholder.svg" width="150" className="user-image"/>
                            <blockquote className="quote">
                                I'm really impressed with the quality of the products I received. The shipping was fast and the items were well packaged.
                            </blockquote>
                            <p className="user-name">- Customer 2</p>
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
