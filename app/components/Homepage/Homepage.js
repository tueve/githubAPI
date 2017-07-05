/**
 * Created by MilkyWay on 02/07/2017.
 */
const React = require('react')
const Link = require('react-router-dom').Link

function Homepage() {
    return (
        <div className="container">
            <h1>Hello</h1>
            <Link to='/battle' className="button">
                battle
            </Link>
        </div>
    )
}

module.exports = Homepage