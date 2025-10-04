import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard =({category}) => {
       
    const [articles,setArticles] = useState([]);
    
   useEffect(() => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
     console.log("API Response:", data); //  check what’s coming
      if (data.articles) {
        setArticles(data.articles);
      } else {
        setArticles([]);
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      setArticles([]);
    });
}, [category]);



  return (
    <div>
        <h2 className='text-center fw-bold my-4'  style={{
    color: "#fff",
    textShadow: "0 0 10px #ff8a00, 0 0 20px #e52e71",
  }}>
    Latest <span className="badge bg-danger">NEWS</span></h2>

        {
            articles.map((news,index)=>(
             <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))
        }
    </div>
  )
}

export default NewsBoard
