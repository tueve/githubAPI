/**
 * Created by MilkyWay on 02/07/2017.
 */
const React = require('react')
const Link = require('react-router-dom').Link
const FormGetInput = require('../Form/FormGetInput')

function Homepage() {
    return (
        <div className="container">
            <FormGetInput/>
            <Link to='/battle' className="button">
                battle
            </Link>
        </div>
    )
}

module.exports = Homepage