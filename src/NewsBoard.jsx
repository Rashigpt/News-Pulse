import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);  // loading state

  useEffect(() => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.articles) setArticles(data.articles);
        else setArticles([]);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setArticles([]);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      <h2 className='text-center fw-bold my-4' style={{
        color: "#fff",
        textShadow: "0 0 10px #ff8a00, 0 0 20px #e52e71",
      }}>
        Latest <span className="badge bg-danger">NEWS</span>
      </h2>

      {loading && (  // loading spinner
        <div className="text-center my-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && articles.length === 0 && (  // empty state
        <p className="text-center text-light">No articles found.</p>
      )}

      {/* Fixed: use Bootstrap row/col grid instead of d-inline-block */}
      <div className="row g-4 justify-content-center">
        {articles.map((news, index) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={news.url || index}>
            <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsBoard;