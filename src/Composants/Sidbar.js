import React from 'react'
import '../Styles/index.css'
import {Link} from 'react-router-dom'

const Sidbar = () => {
  return (
    <main>
        <header className='header'>
            <div className='header-toggle'>
                <i class="fas fa-bars"></i>
            </div>
        </header>
        <aside className='aside'>
            <nav className='nav'>
                <div>
                    <Link to="/" className='nav-logo'>
                        <i class='fas fa-home-alt nav-logo-icon'></i>
                        <span className='nav-logo-name'>  Home page</span>
                    </Link>
                    <div className='nav-list'>
                        <Link to="/dashboard" className='nav-logo'>
                            <i class='fas fa-tachometer nav-logo-icon'></i>
                            <span className='nav-list-name'>  DashBoard</span>
                        </Link>
                        <Link to="/client" className='nav-logo'>
                            <i class='fas fa-users nav-logo-icon'></i>
                            <span className='nav-list-name'>  Client</span>
                        </Link>
                        <Link to="/article" className='nav-logo'>
                            <i class='fas fa-basket-shopping nav-logo-icon'></i>
                            <span className='nav-list-name'>  Article</span>
                        </Link>
                        <Link to="/autres" className='nav-logo'>
                            <i class='fas fa-sliders nav-logo-icon'></i>
                            <span className='nav-list-name'>  Autres gestions</span>
                        </Link>
                    </div>
                </div>
                <Link to="/deconnexion" className='nav-logo'>
                      <i class="fas fa-right-to-bracket nav-logo-icon"></i>
                    <span className='nav-list-name'>  Déconnexion</span>
                </Link>
            </nav>
        </aside>
    </main>
  )
}

export default Sidbar