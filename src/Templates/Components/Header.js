import React from 'react'

const Header = () => {
  return (
    <header className='shadow'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand MainName" style={{fontFamily: "Audiowide",fontSize:"30px"}}>AniWide</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
           
            <form className="d-flex">
              <input className="form-control bg-dark text-light rounded-0 rounded-start search" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light rounded-0 rounded-end search bg-dark" type="submit"><i className="fa-solid fa-magnifying-glass"></i> </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;