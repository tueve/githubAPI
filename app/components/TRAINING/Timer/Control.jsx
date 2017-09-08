const React = require('react')

class Control extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle() {
        let myPrompt = prompt('aljsdlk')
    }

    render() {
        return (
            <div className="control-wrapper">
                <button onClick={this.clickHandle}>START</button>
                <button>CLEAR</button>
            </div>
        )
    }
}

module.exports = Control