/**
 * Created by MilkyWay on 22/07/2017.
 */
const React = require('react')

function TempMessage(props) {
    return(
        <div className="container">
            <h2 className="temperature__message">It is {props.temp} <sup>o</sup> C in {props.location} city</h2>
        </div>
    )
}

module.exports = TempMessage