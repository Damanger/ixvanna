import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import BlockContent from "@sanity/block-content-to-react"
import { SocialIcon } from 'react-social-icons'
import { FaLink } from "react-icons/fa";
import '../styles/designs.css'
import Modal from "./Modal";

export default function Designs(){
    const [postData, setPostData] = useState(null);
    const [filterOption, setFilterOption] = useState("A-Z");

    useEffect(() => {
        // Fetch de los datos y ordenación inicial
        fetchAndSortData(filterOption);
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY; // Obtener la posición de desplazamiento vertical
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Calcular la altura total de la página
            const scrolled = (scrollTop / scrollHeight) * 100; // Calcular el porcentaje de desplazamiento

            const scrollWatcher = document.querySelector('.scroll-watcher');
            scrollWatcher.style.width = scrolled + '%'; // Establecer el ancho de la barra de desplazamiento según el porcentaje de desplazamiento
        });
    }, [filterOption]); // Ejecutar efecto cuando cambie la opción de filtrado

    function fetchAndSortData(option) {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            publishedAt,
            body,
            price,
            href
        }`)
            .then((data) => {
                // Ordenar los datos según la opción de filtrado
                const sortedData = sortData(data, option);
                setPostData(sortedData);
            })
            .catch(console.error);
    }

    const sortData = (data, option) => {
        switch(option) {
            case "A-Z":
                return data.sort((a, b) => a.title.localeCompare(b.title));
            case "Z-A":
                return data.sort((a, b) => b.title.localeCompare(a.title));
            case "menor-mayor":
                return data.sort((a, b) => a.price - b.price);
            case "mayor-menor":
                return data.sort((a, b) => b.price - a.price);
            default:
                return data;
        }
    };

    const handleFilterChange = (option) => {
        setFilterOption(option);
    };

    return(
        <main className="diseños">
            <div className="scroll-watcher"></div>
            <section>
                <h1>Diseños</h1>
                <p style={{marginLeft:'90%'}}>Filtrar:</p><Modal onFilterChange={handleFilterChange}/>
                <div className="cards">
                    { postData && postData.map((post, index) => (
                        <article key={index}>
                            <div className="card animate">
                                <div className="card-image"><img src={post.mainImage.asset.url} alt={post.mainImage.alt} /></div>
                                <div className="category"> {post.title} </div>
                                <div className="heading"> ${post.price}Mxn
                                    <div className="author">Descripción: <BlockContent blocks={post.body}></BlockContent>
                                        <span className="name">Publicado: {post.publishedAt}</span>
                                        <p>Pregunte por disponibilidad:
                                            <SocialIcon url={`https://wa.me/529511943244/?text=Hola,%20buen%20día%20,quisiera%20información%20sobre%20este%20modelo:%20${post.mainImage.asset.url}`} network="whatsapp" className="redes" target="_blank" fgColor="#fff" style={{height:25, width:25}}></SocialIcon>
                                        </p>
                                        Ordénalos aquí: <a href={post.href}><FaLink /></a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
