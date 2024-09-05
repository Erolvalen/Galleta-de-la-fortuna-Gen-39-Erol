// src/components/BackgroundImage.jsx
import React from 'react';
import fondo1 from '../assets/fondo1.png'; // Asegúrate de que la ruta y la extensión sean correctas

const backgroundImages = [
  fondo1,
  // Puedes agregar más imágenes locales aquí
];

const BackgroundImage = ({ index }) => {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,
        height: '100vh', // Asegúrate de que el div tenga altura
        width: '100vw', // Asegúrate de que el div tenga ancho completo
        backgroundSize: 'cover', // Asegúrate de que la imagen cubra todo el fondo
        backgroundPosition: 'center', // Centra la imagen
        position: 'fixed', // Cambia a 'fixed' para que cubra toda la pantalla
        top: 0,
        left: 0,
        zIndex: -1, // Asegúrate de que esté detrás del contenido
      }}
    />
  );
};

export default BackgroundImage;