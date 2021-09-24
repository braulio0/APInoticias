import React from 'react';
import CardNews from './Componets/CardNews';

const ContainerNews = ({news}) => {
return(
  <div>
    {
      news.map(({datePublished, name, image ,description}) => (
        <CardNews 
          publicado={datePublished}
          nombre={name}
          description={description} 
          image={image}
        />
    )
      )
    }
</div>
)

} 
export default ContainerNews;
