var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var {Navbar} = require('@blueprintjs/core');

function MyNavbar() {
    return (
        <div className="nav-wrapper">
            <nav className="pt-navbar pt-dark">
                <div className="pt-navbar-group pt-align-right">

                    <NavLink exact activeClassName='active' to='/'>
                        <button className="pt-button pt-icon-home">
                            Home
                        </button>
                    </NavLink>
                    <span className="pt-navbar-divider"></span>

                    <NavLink exact activeClassName='active' to="/battle">
                        <button className="pt-button pt-icon-satellite">
                            Battle
                        </button>
                    </NavLink>

                    <NavLink activeClassName='active' to="/popular">
                        <button className="pt-button pt-icon-search">
                            Popular
                        </button>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}


function Nav() {
    return(
        <div className="container">
            <MyNavbar/>
        </div>

    )
}

module.exports =  Nav;