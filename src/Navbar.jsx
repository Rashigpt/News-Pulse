import React from 'react'

const Navbar = ({ setCategory, category }) => {
  const navItems = ["general", "technology", "business", "health", "sports", "entertainment"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top py-3" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <span className="badge text-light fs-4 px-3 py-2" style={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            borderRadius: "10px"
          }}>News Pulse</span>
        </a>

        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item m-2" key={item}>
                <div
                  className="nav-link fw-semibold"
                  style={{
                    cursor: "pointer",
                    transition: "0.3s",
                    color: category === item ? "#ff8a00" : "#fff",  // active highlight
                    borderBottom: category === item ? "2px solid #ff8a00" : "2px solid transparent"
                  }}
                  onClick={() => setCategory(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;