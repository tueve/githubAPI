const React = require('react')
const Clock = require('./Clock')

class CountDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sec: this.props.sec,
            msgError: '',
            input: false,
            status: 'pause'
        }


    }






}

CountDown.defaultProps = {
    sec: 0
}

module.exports = CountDown