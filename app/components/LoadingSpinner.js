var React = require('react');
var PropTypes = require('prop-types');

var {Spinner } = require('@blueprintjs/core');

class LoadingSpinner extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           text: props.text,
           speed: props.speed
       }
   }

    componentDidMount() {
        const textStopper = this.props.text + '...';

        this.interval = window.setInterval(()=>{
            if(this.state.text === textStopper) {
                this.setState(()=>{
                    return {
                        text: this.props.text
                    }
                })
            }
            else {
                this.setState((prevState)=>{
                    return {
                        text: prevState.text + '.'
                    }
                })
            }
        },this.props.speed)
    }

    render() {
        return (
            <div className='spinner-wrapper'>
                <Spinner className ='huge-size' />
                <span className='loading-text'>{this.state.text}</span>
            </div>
        )
    }

   componentWillUnmount() {
       window.clearInterval(this.interval)
   }
}

LoadingSpinner.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
}

LoadingSpinner.defaultProps = {
    text: 'loading',
    speed: 300
}

module.exports = LoadingSpinner;