import { useState, useRef } from 'react'
import Navbar from './Navbar'
import NewsBoard from './NewsBoard'
import Footer from './Footer'

const App = () => {
  const [category, setCategory] = useState("general")
  const [animKey, setAnimKey] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const footerRef = useRef(null)

  const handleCategory = (cat) => {
    setCategory(cat)
    setAnimKey(prev => prev + 1)
    setSearchQuery("") // clear search on category change
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setAnimKey(prev => prev + 1)
  }

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#F6FAFD] font-sans flex flex-col">
      <Navbar
        category={category}
        setCategory={handleCategory}
        onSearch={handleSearch}
        onSubscribe={scrollToFooter}
      />
      <main className="max-w-7xl mx-auto px-4 py-6 w-full flex-1">
        <div key={animKey} className="animate-fadein">
          <NewsBoard category={category} searchQuery={searchQuery} />
        </div>
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}

export default App