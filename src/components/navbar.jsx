import React from 'react'
export default function navbar() {
  return (
     <>
     
     <nav className="navbar sticky-top bg-primary border-bottom border-secondary shadow-sm p-3 "  style={{boxShadow: "0 4px 6px rgba(0,0,0,0.2)" }} >
  <div className="container-fluid" style={{display:"flex" , alignItems:"center", justifyContent:"center "  , textTransform:"uppercase"}}>
    <a className="navbar-brand" href="#" style={{ color :"white"}}>  Password generator  </a>
  </div>
</nav>
     </>
  )
}
