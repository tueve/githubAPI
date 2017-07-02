/**
 * Created by MilkyWay on 02/07/2017.
 */
var React = require('react')
var Popular = require('./Popular/Popular')

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Hello World</h1>
                <Popular/>
            </div>
        )
    }
}

module.exports = App