import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import fallback from './assets/news.jpg'

// 'world' is not valid for country=us, map it to general
const CATEGORY_MAP = {
  world: 'general',
}

const NewsBoard = ({ category , searchQuery }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    setArticles([]) // clear old articles on category change

    const mapped = CATEGORY_MAP[category] || category
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${mapped}&apiKey=${import.meta.env.VITE_API_KEY}&_=${Date.now()}`
    // Date.now() busts cache so every refresh fetches fresh news

    fetch(url, { cache: 'no-store' }) // force no cache
      .then(res => res.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles.filter(a => a.title !== '[Removed]'))
        } else {
          setArticles([])
        }
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [category])
  // Search results view
if (searchQuery && filtered !== null) return (
  <div>
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[10px] font-black tracking-[2px] uppercase text-[#0A1931] whitespace-nowrap">
        Results for "{searchQuery}"
      </span>
      <div className="flex-1 h-px bg-[#0A1931]" />
    </div>
    {filtered.length === 0 ? (
      <p className="text-sm text-[#4A7FA7] text-center py-20">No results found for "{searchQuery}"</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((article, i) => (
          <NewsItem
            key={article.url || i}
            title={article.title}
            description={article.description}
            src={article.urlToImage}
            url={article.url}
            category={category}
            source={article.source?.name}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
    )}
  </div>
)

  const hero = articles[0]
  const sidebarTop = articles[1]
  const sidebarList = articles.slice(2, 4)
  const gridArticles = articles.slice(4, 8)

  // Filter by search if query exists
const filtered = searchQuery
  ? articles.filter(a =>
      a.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : null

  if (loading) return (
    <div className="flex items-center justify-center h-96">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-[#0A1931] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs text-[#4A7FA7] tracking-widest uppercase">Loading stories...</p>
      </div>
    </div>
  )

  if (error || articles.length === 0) return (
    <div className="flex items-center justify-center h-96">
      <p className="text-sm text-[#4A7FA7]">No stories found. Try another category.</p>
    </div>
  )

  return (
    <div className="flex flex-col gap-8">

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] border border-[#B3CFE5] rounded-lg overflow-hidden">

        <div className="relative min-h-[260px] md:min-h-[360px]">
          <img
            src={hero?.urlToImage || fallback}
            alt={hero?.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[10px] font-black tracking-[2px] uppercase text-[#4A7FA7] mb-2">
              · {category} ·
            </p>
            <h1 className="font-serif text-2xl font-bold text-[#F6FAFD] leading-snug mb-3">
              {hero?.title?.slice(0, 100)}
            </h1>
            <div className="flex items-center gap-4 text-xs text-[#B3CFE5]">
              <span>{hero?.source?.name}</span>
              <span>·</span>
              <span>
                {hero?.publishedAt
                  ? Math.floor((Date.now() - new Date(hero.publishedAt)) / 3600000) + 'h ago'
                  : ''}
              </span>
            </div>
          </div>
          <a href={hero?.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0" />
        </div>

        <div className="flex flex-col border-l border-[#B3CFE5]">
          {sidebarTop && (
            <a
              href={sidebarTop.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 border-b border-[#B3CFE5] flex-1 block hover:bg-[#EBF3FA] transition-colors"
            >
              <div className="overflow-hidden rounded mb-3">
                <img
                  src={sidebarTop.urlToImage || fallback}
                  alt={sidebarTop.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#0A1931] leading-snug mb-2">
                {sidebarTop.title?.slice(0, 80)}
              </h3>
              <p className="text-[11px] text-[#4A7FA7] leading-relaxed">
                {sidebarTop.description?.slice(0, 90)}
              </p>
              <p className="text-[10px] text-[#B3CFE5] mt-2 uppercase tracking-wide">
                {sidebarTop.source?.name}
              </p>
            </a>
          )}

          {sidebarList.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 p-4 border-b border-[#B3CFE5] last:border-b-0 hover:bg-[#EBF3FA] transition-colors"
            >
              <div className="overflow-hidden rounded flex-shrink-0">
                <img
                  src={article.urlToImage || fallback}
                  alt={article.title}
                  className="w-16 h-12 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0A1931] leading-snug">
                  {article.title?.slice(0, 70)}
                </h4>
                <p className="text-[10px] text-[#4A7FA7] mt-1">{article.source?.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* TOP STORIES GRID */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] font-black tracking-[2px] uppercase text-[#0A1931] whitespace-nowrap">
            Top Stories
          </span>
          <div className="flex-1 h-px bg-[#0A1931]" />
          <span className="text-[10px] text-[#4A7FA7] whitespace-nowrap">View all →</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridArticles.map((article, i) => (
            <NewsItem
              key={article.url || i}
              title={article.title}
              description={article.description}
              src={article.urlToImage}
              url={article.url}
              category={category}
              source={article.source?.name}
              publishedAt={article.publishedAt}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default NewsBoard