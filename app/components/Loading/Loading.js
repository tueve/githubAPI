var React =  require('react')
var PropTypes = require('prop-types')
var {Spinner} = require('@blueprintjs/core')
require('./Loading.scss')

class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
        }
    }

    componentDidMount() {
        const stopper = this.props.text + '...'
        this.interval = window.setInterval(()=>{
            this.state.text === stopper ?
                this.setState(()=> {
                    return {
                        text: this.props.text
                    }
                }) :
                this.setState(()=>{
                    return {
                        text: this.state.text + '.'
                    }
                })
            console.log(this.state.text)
        },this.props.speed)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {
        return (
            <div className="loading--wrapper">
                <Spinner className="spinner--wrapper"/>
                <span className="loading__text">{this.state.text}</span>
            </div>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
    text: 'loading',
    speed: 300
}

module.exports = Loading;