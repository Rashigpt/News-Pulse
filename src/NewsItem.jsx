import fallback from './assets/news.jpg'

const NewsItem = ({ title, description, src, url, category, source, publishedAt }) => {
  const timeAgo = (dateStr) => {
    if (!dateStr) return ''
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 60000)
    if (diff < 60) return `${diff}m ago`
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`
    return `${Math.floor(diff / 1440)}d ago`
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="border-t-2 border-[#0A1931] pt-3">
        <div className="overflow-hidden rounded mb-3">
          <img
            src={src || fallback}
            alt={title}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="text-[9px] font-black tracking-[2px] uppercase text-[#4A7FA7] mb-1">
          {category}
        </p>
        <h3 className="font-serif text-sm font-bold text-[#0A1931] leading-snug mb-2 group-hover:text-[#1A3D63] transition-colors">
          {title?.slice(0, 80)}
        </h3>
        <p className="text-[11px] text-[#4A7FA7] leading-relaxed mb-3">
          {description?.slice(0, 80)}
        </p>
        <div className="flex items-center justify-between text-[10px] text-[#B3CFE5]">
          <span>{source}</span>
          <span>{timeAgo(publishedAt)}</span>
        </div>
      </div>
    </a>
  )
}

export default NewsItem