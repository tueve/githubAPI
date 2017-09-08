/**
 * Created by MilkyWay on 22/07/2017.
 */
const React = require('react')
const TempInput = require('../TemperatureForm/TempInput')
const TempMessage = require('../TemperatureForm/TempMessage')
//const TempFormAlias = require('Common')

class TemperatureForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: this.props.temp,
            location: this.props.locationTemp
        }
        this.submitHandle = this.submitHandle.bind(this)
    }

    // componentWillMount() {
    //     this.setState({
    //         temp: 'khdasfk',
    //         location: 'asdfkhadskf'
    //     })
    // }

    submitHandle(location,temp) {
        this.setState({location: location,temp:temp})
    }

    render() {
        return(
            <div className="container">
                <TempInput submitHandle = {this.submitHandle}/>
                <TempMessage temp = {this.state.temp} location = {this.state.location}/>
            </div>
        )
    }
}

TemperatureForm.defaultProps = {
    temp: '32',
    locationTemp: 'Ho Chi Minh'
}

module.exports = TemperatureForm