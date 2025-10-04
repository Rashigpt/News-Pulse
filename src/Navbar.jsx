import React from 'react'


const Navbar = ({ setCategory }) => {
  return (
<nav
  className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top py-3"
  data-bs-theme="dark"
>

<div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#">
      <span className="badge text-light fs-4 px-3 py-2" style={{
        background: "linear-gradient(90deg, #ff8a00, #e52e71)",
        borderRadius: "10px"
      }} > News Pulse
      </span>
    </a>
   
   <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item m-2">
          <div className="nav-link text-light fw-semibold"
                style={{ cursor: "pointer", transition: "0.3s" }} onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item m-2">
          <div className="nav-link text-light fw-semibold" style={{ cursor: "pointer", transition: "0.3s" }} onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item m-2">
          <div className="nav-link text-light fw-semibold" style={{ cursor: "pointer", transition: "0.3s" }} onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item m-2">
          <div className="nav-link text-light fw-semibold" style={{ cursor: "pointer", transition: "0.3s" }} onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item m-2">
          <div className="nav-link text-light fw-semibold" style={{ cursor: "pointer", transition: "0.3s" }} onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        {/*   <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>      PREVIOUS ONE BEFORE 20 */ }
      </ul>
    </div>

  </div>
</nav>
  )
}

export default Navbar