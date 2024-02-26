import React, { useEffect, useState } from 'react';
import '../styles/cargando.css'

const Cargando = ({ imagen }) => {
    const [mostrarLoader, setMostrarLoader] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMostrarLoader(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`cargando ${mostrarLoader ? 'visible' : 'oculto'}`}>
            <img src={imagen} alt="Cargando..." />
        </div>
    );
};

export default Cargando;