import React, { useState } from "react";
import "../styles/modal.css";
import { FaFilter, FaTimes } from "react-icons/fa";

export default function Modal({ onFilterChange }) {
    const [modal, setModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState("A-Z");

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        onFilterChange(option); // Llama a la función de devolución de llamada con la nueva opción seleccionada
        toggleModal(); // Cierra el modal después de seleccionar una opción
    };

    return (
        <>
            <button onClick={toggleModal} className="btn-modal filtrado">
                <FaFilter />
            </button>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h1>Filtrar por:</h1>
                        <p className="opciones">
                            <label onClick={() => handleOptionChange("A-Z")}>
                                <input type="radio" value="A-Z" checked={selectedOption === "A-Z"} readOnly />
                                <span>Ordenar de A-Z</span>
                            </label>
                            <br />
                            <label onClick={() => handleOptionChange("Z-A")}>
                                <input type="radio" value="Z-A" checked={selectedOption === "Z-A"} readOnly />
                                <span>Ordenar de Z-A</span>
                            </label>
                            <br />
                            <label onClick={() => handleOptionChange("menor-mayor")}>
                                <input type="radio" value="menor-mayor" checked={selectedOption === "menor-mayor"} readOnly />
                                <span>Menor a mayor precio</span>
                            </label>
                            <br />
                            <label onClick={() => handleOptionChange("mayor-menor")}>
                                <input type="radio" value="mayor-menor" checked={selectedOption === "mayor-menor"} readOnly />
                                <span>Mayor a menor precio</span>
                            </label>
                            <br />
                            <label onClick={() => handleOptionChange("fecha")}>
                                <input type="radio" value="fecha" checked={selectedOption === "fecha"} readOnly />
                                <span>Filtrar por fecha</span>
                            </label>
                        </p>
                        <button className="close-modal filtrado" onClick={toggleModal}>
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
