import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import '../styles/banner.css'

export default function Banner() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "banner"]{
            title,
            mainImage{
                asset->{
                    _id,
                    url,
                    metadata {
                        dimensions {
                            aspectRatio
                        }
                    }
                },
                alt
            }
        }`)
        .then(data => setBanners(data))
        .catch(error => console.error("Error fetching banners:", error));
    }, []);

    return (
        <main className="banner">
            {banners.map((banner, index) => (
                <div key={index} className="banner-container">
                    <h1 className="banner-title">Ixvanna Diseños</h1>
                    <img 
                        src={banner.mainImage.asset.url} 
                        alt={banner.mainImage.alt} 
                        style={{ width: "100%", height: "auto" }} // Asegura que la imagen ocupe todo el ancho y mantenga su relación de aspecto
                    />
                </div>
            ))}
        </main>
    );
}
