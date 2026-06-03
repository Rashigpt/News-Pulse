import { useState } from 'react'

const categories = ["general", "world", "technology", "business", "health", "sports", "entertainment"]

const Navbar = ({ category, setCategory, onSearch, onSubscribe }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchInput.trim()) return
    onSearch(searchInput.trim())
    setSearchInput("") // clear after search
  }

  return (
    <header className="sticky top-0 z-50">

      {/* Top bar */}
      <div className="bg-[#0A1931] px-4 md:px-6 py-1.5 flex items-center justify-between">
        <span className="text-[#B3CFE5] text-[10px] tracking-wide">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <div className="hidden md:flex gap-4 text-xs text-[#4A7FA7]">
          <span>World</span><span>·</span>
          <span>Markets</span><span>·</span>
          <span>Weather</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="bg-[#F6FAFD] border-b-2 border-[#0A1931] px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
        <div
          className="font-serif text-2xl md:text-3xl font-bold text-[#0A1931] tracking-tight shrink-0 cursor-pointer"
          onClick={() => setCategory("general")}
        >
          News<span className="text-[#1A3D63]">Pulse</span>
        </div>

        {/* Search — desktop */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 border border-[#B3CFE5] rounded-md px-3 py-1.5 flex-1 max-w-xs group focus-within:border-[#1A3D63] transition-colors">
          <svg className="w-3.5 h-3.5 shrink-0 text-[#4A7FA7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Search news..."
            className="bg-transparent text-xs text-[#0A1931] placeholder-[#4A7FA7] outline-none w-full"
          />
          {searchInput && (
            <button type="submit" className="text-[10px] font-bold text-[#1A3D63] whitespace-nowrap hover:text-[#0A1931]">
              Go →
            </button>
          )}
        </form>

        <div className="flex items-center gap-3">
          <button
            onClick={onSubscribe}
            className="hidden md:block bg-[#0A1931] text-[#F6FAFD] text-xs font-bold px-4 py-2 rounded tracking-wide hover:bg-[#1A3D63] transition-colors"
          >
            Subscribe Now
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#0A1931] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#0A1931] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#0A1931] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Category nav — desktop */}
      <div className="hidden md:flex bg-[#F6FAFD] border-b border-[#B3CFE5] px-6 overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-[10px] font-bold tracking-widest uppercase px-4 py-3 border-b-2 whitespace-nowrap transition-all duration-200
              ${category === cat
                ? 'border-[#0A1931] text-[#0A1931]'
                : 'border-transparent text-[#1A3D63] hover:text-[#0A1931] hover:border-[#B3CFE5]'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden bg-[#F6FAFD] border-b border-[#B3CFE5] overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <form onSubmit={handleSearch} className="flex items-center gap-2 border border-[#B3CFE5] rounded-md px-3 py-2 text-xs text-[#4A7FA7] mx-4 mt-3">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Search news..."
            className="bg-transparent outline-none w-full text-[#0A1931] placeholder-[#4A7FA7]"
          />
        </form>
        <div className="flex flex-col py-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setMenuOpen(false) }}
              className={`text-left text-xs font-bold tracking-widest uppercase px-4 py-3 border-l-2 transition-all duration-200
                ${category === cat
                  ? 'border-[#0A1931] text-[#0A1931] bg-[#EBF3FA]'
                  : 'border-transparent text-[#1A3D63]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

    </header>
  )
}

export default Navbar