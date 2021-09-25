import React from 'react';
import CardNews from './Componets/CardNews';

const ContainerNews = ({news}) => {
  
 //n['image'] ? imagen = n.image.thumbnail.contentUrl : console.log("no hay")
  return(
  <div>
    {


      news.map((n) => {
       if(n['image']){
         return(
                <CardNews 
         publicado={n.datePublished}
         nombre={n.name}
       description={n.description} 
          imagen={n.image.thumbnail.contentUrl}
        />)
       }
         
      }
      )
    }

</div>
)

} 
export default ContainerNews;
