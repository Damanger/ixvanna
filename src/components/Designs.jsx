import React, { useEffect } from "react";
import sanityClient from '../client'
import BlockContent from "@sanity/block-content-to-react"
import { SocialIcon } from 'react-social-icons'
import '../styles/designs.css'

export default function Designs(){
    const [postData, setPost] = useState(null);

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
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    return(
        <main>
            <section>
                <h1>Diseños</h1>
                <div className="cards">
                    { postData && postData.map((post, index) => (
                        <article key={index} className="animate-on-scroll">
                            <div className="card animate">
                                <div className="card-image"><img src={post.mainImage.asset.url} alt={post.mainImage.alt} /></div>
                                <div className="category"> {post.title} </div>
                                <div className="heading"> ${post.price}Mxn
                                    <div className="author">Descripción: <BlockContent blocks={post.body}></BlockContent>
                                        <span className="name">Publicado: {post.publishedAt}</span>
                                        <p>Pregunte por disponibilidad:
                                            <SocialIcon url={`https://wa.me/529511943244/?text=Hola,%20buen%20día%20,quisiera%20información%20sobre%20este%20modelo:%20${post.mainImage.asset.url}`} network="whatsapp" className="redes" target="_blank" fgColor="#fff" style={{height:25, width:25}}></SocialIcon>
                                        </p>
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
