/**
 * Created by MilkyWay on 10/08/2017.
 */
const React = require('react')
const Clock = require('./Clock')

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle() {
        let myPrompt = prompt('aljsdlk')
    }

    render() {
        return(
            <div className="container">
                <h2>This is Counter</h2>
                <Clock/>
                <button onClick={this.clickHandle}>CLICK ME</button>
            </div>
        )
    }
}

module.exports = Counter