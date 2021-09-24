import React, {useState, useEffect} from 'react';
import ContainerNews from '../Containers/ContainerNews';
const RequestApi = () => {

const [news, setNews] = useState([])
useEffect(() => {
const nota = consumeApiNoticias();
  console.log(nota)
}, [])
const consumeApiNoticias = async() => {
const data = await fetch("https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off", {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "e26908a6fdmsh3d0dee6f2dfb3dbp109f8ajsnbdf0ebe504f0"
	}
})
const dataJson = await data.json()
	setNews(dataJson.value)
return dataJson;
}
return (
<ContainerNews news={news} />
);
} 
export default RequestApi;


