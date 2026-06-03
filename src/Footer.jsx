const Footer = () => {
  const categories = ["General", "Technology", "Business", "Health", "Sports", "Entertainment"]

  return (
    <footer className="bg-[#0A1931] text-[#B3CFE5] mt-12">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="font-serif text-2xl font-bold text-[#F6FAFD] mb-3">
            News<span className="text-[#4A7FA7]">Pulse</span>
          </div>
          <p className="text-xs text-[#4A7FA7] leading-relaxed max-w-xs">
            Your trusted source for breaking news, in-depth analysis, and stories that matter — delivered fresh every hour.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-[10px] font-black tracking-[2px] uppercase text-[#F6FAFD] mb-4">Categories</h4>
          <div className="grid grid-cols-2 gap-1.5">
            {categories.map(cat => (
              <span key={cat} className="text-xs text-[#4A7FA7] hover:text-[#F6FAFD] cursor-pointer transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-[10px] font-black tracking-[2px] uppercase text-[#F6FAFD] mb-4">About</h4>
          <div className="flex flex-col gap-1.5">
            {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map(item => (
              <span key={item} className="text-xs text-[#4A7FA7] hover:text-[#F6FAFD] cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A3D63] px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[10px] text-[#4A7FA7] tracking-wide">
          © {new Date().getFullYear()} NewsPulse. Powered by NewsAPI.
        </p>
        <p className="text-[10px] text-[#1A3D63]">
          Built with React + Tailwind CSS
        </p>
      </div>

    </footer>
  )
}

export default Footer