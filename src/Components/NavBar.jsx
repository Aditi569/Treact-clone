import React from 'react'
import assets from "../assets/asset-0.svg"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong" id='navv'>
                <img className='imagee' src={assets} />
                <div className="container">
                    <a className="navbar-brand fs-3" href="#">Treact</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mx-auto mb-2 fs-5 mb-lg-0 gap-5" id="ul-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/">Location</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex " role="Hire">
                        <button className="btn" type="submit">Hire Us</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
