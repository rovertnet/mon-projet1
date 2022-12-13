import React from 'react'
import '../Styles/index.css'
import {Link} from 'react-router-dom'

const Sidbar = () => {
  return (
    <main className='space-toggle'>
        <header className='header space-toggle'>
            <div className='header-toggle'>
                <i class="fas fa-bars"></i>
            </div>
        </header>
        <aside className='sidebar show'>
            <nav className='nav'>
                <div>
                    <Link to="/" className='nav-logo'>
                        <i className='fas fa-home-alt nav-logo-icon'></i>
                        <span className='nav-logo-name'>  Home page</span>
                    </Link>
                    <div className='nav-list'>
                        <Link to="/dashboard" className='nav-link active'>
                            <i className='fas fa-tachometer nav-logo-icon'></i>
                            <span className='nav-list-name'>  DashBoard</span>
                        </Link>
                        <Link to="/client" className='nav-link'>
                            <i className='fas fa-users nav-logo-icon'></i>
                            <span className='nav-list-name'>  Client</span>
                        </Link>
                        <Link to="/article" className='nav-link'>
                            <i className='fas fa-basket-shopping nav-logo-icon'></i>
                            <span className='nav-list-name'>  Article</span>
                        </Link>
                        <Link to="/autres" className='nav-link'>
                            <i className='fas fa-sliders nav-logo-icon'></i>
                            <span className='nav-list-name'>  Autres gestions</span>
                        </Link>
                    </div>
                </div>
                <Link to="/deconnexion" className='nav-link'>
                      <i className="fas fa-right-to-bracket nav-logo-icon"></i>
                    <span className='nav-list-name'>  Déconnexion</span>
                </Link>
            </nav>
        </aside>
        <h1>DashBoard</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <label>Nom</label>
                    <input className='form-control' />
                </div>
                <div className='col-lg-6'>
                    <label>Nom</label>
                    <input className='form-control' />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Sidbar