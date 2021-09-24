import React from 'react';

const CardNews = ({ publicado, nombre , imagen, description }) => {
  return (

    <div>
<h1> {nombre} </h1>
      <p> {description}</p>
      <p> aqui es image {imagen.thumbnail}</p>

    </div>
  )

}
export default CardNews;
