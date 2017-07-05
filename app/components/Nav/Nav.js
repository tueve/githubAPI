/**
 * Created by MilkyWay on 05/07/2017.
 */
const React = require('react')
const NavLink = require('react-router-dom').NavLink

function Nav() {
    return (
        <ul>
            <NavLink to='/' exact activeClassName='active'>
                <li>Home</li>
            </NavLink>

            <NavLink to='/popular' exact activeClassName='active'>
                <li>popular</li>
            </NavLink>
            <NavLink to='/battle' exact activeClassName='active'>
                <li>battle</li>
            </NavLink>
        </ul>
    )
}

module.exports = Nav