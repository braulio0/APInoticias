import React from 'react';

const CardNews = ({ publicado, nombre , imagen, description }) => {

  return (

    <div>
<h1> {nombre} </h1>
      <p> {description}</p>
      <p> aqui es image {imagen}</p>

      <img src={imagen} alt="imagen"/>
    </div>
  )

}
export default CardNews;
