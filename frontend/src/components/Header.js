import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/images//linkzify_v2_logo.svg"
const Header = () => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <NavLink className="navbar-brand d-flex" to="/">
              
              <img src={logo} width='30' alt="linkzify logo" />
              <h1 style={{margin : 0 , marginLeft  :10}} >Linkzify _ v2</h1>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul style={{flex:1 , justifyContent: 'end'}} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={'/'}>Secret Message</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" disabled aria-current="page"
                    to="/">Abhi</NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <button className="btn nav-link" aria-current="page" to={"Logout"}>Logout</button>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={"Login"}>Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


    </React.Fragment>
  )
}

export default Header