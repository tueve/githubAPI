/**
 * Created by MilkyWay on 05/07/2017.
 */
const React = require('react')
const NavLink = require('react-router-dom').NavLink

function Nav() {
    return (
        <ul>
            <li>
                <NavLink to='/' exact activeClassName='active'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/popular' exact activeClassName='active'>
                    popular
                </NavLink>
            </li>
            <li>
                <NavLink to='/battle' exact activeClassName='active'>
                    battle
                </NavLink>
            </li>
            <li>
                <NavLink to='/youtube' exact activeClassName='active'>
                    youtube
                </NavLink>
            </li>
            <li>
                <h3>Training</h3>
                <ul>
                    <li>
                        <NavLink to='/training' exact activeClassName='active'>
                            Training
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/training?temperature' exact activeClassName='active'>
                            Temperature
                        </NavLink>
                    </li>
                    <li>
                        <h2>Timer</h2>
                        <ul>
                            <li>
                                <NavLink to='/training?timer=counter' exact activeClassName='active'>
                                    counter
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/training?timer=countdown' exact activeClassName='active'>
                                    countdown
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

module.exports = Nav