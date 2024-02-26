import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from '../client'
import BlockContent from "@sanity/block-content-to-react"
import '../styles/designs.css'

export default function Designs(){
    const [postData, setPost]= useState(null)
    useEffect(() => {
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
            price
        }`).then((data) => setPost(data))
        .catch(console.error)
    }, [])
    return(
        <main>
            <section>
                <h1>Diseños</h1>
                <div className="cards">
                    { postData && postData.map((post, index) => (
                        <article key={index}>
                            <div className="card">
                                <div className="card-image"><img src={post.mainImage.asset.url} alt={post.mainImage.alt} /></div>
                                <div className="category"> {post.title} </div>
                                <div className="heading"> ${post.price}
                                    <div className="author"> <BlockContent blocks={post.body}></BlockContent>
                                        <span className="name">{post.publishedAt}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}