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
                    url
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
                <div key={index}>
                    <h2>{banner.title}</h2>
                    <img src={banner.mainImage.asset.url} alt={banner.mainImage.alt} />
                </div>
            ))}
        </main>
    );
}
