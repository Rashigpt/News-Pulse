import React, { useState } from 'react'
import Navbar from './Navbar';
import NewsBoard from './NewsBoard';
import NewsItem from './NewsItem';

 const App = () => {
  const[category,setCategory]=useState("general");
  return (                                             
    <div className="min-vh-100 d-flex flex-column"             
      style={{
        background:
          "linear-gradient(135deg, #1e3c72, #2a5298, #3a7bd5, #00d2ff)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 12s ease infinite",
      }}>
                                                       {/* CCS LAST  */}
      <Navbar setCategory={setCategory}/>

      <div className="container mt-4 flex-grow-1">     {/* CCS DIV LAST  */}
        <NewsBoard category={category} />            
      </div>                                    

      {/* Animation keyframes inline */}                {/* CCS LAST  */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
    </div>
  )
}

export default App;
