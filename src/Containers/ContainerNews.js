import React from 'react';
import CardNews from './Componets/CardNews';

const ContainerNews = ({news}) => {
  return(
  <div>
    {
      news.map((n, index) => (
        <CardNews 
         publicado={n.datePublished}
         nombre={n.name}
        description={n.description} 
          imagen={n.image.thumbnail.contentUrl}
        /> 
         )
      )
    }
</div>
)

} 
export default ContainerNews;
