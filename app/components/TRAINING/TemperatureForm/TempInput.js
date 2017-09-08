/**
 * Created by MilkyWay on 22/07/2017.
 */
const React = require('react')
const api =  require('../../../ultils/Api')

class TempInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            temp:''
        }
        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(e) {
        e.preventDefault()
        api.fetchWeatherAPI(this.state.location).then(
            data=>{
                data.status === 200 ? console.log(data,'datacomponent') : console.log('error')
            },
            err=>console.log('page not found'))
        this.state.temp && this.props.submitHandle(this.state.location,this.state.temp)
    }

    onChangeHandle(e) {
        this.setState({location: e.target.value})
    }

    render() {
        return(
            <div className="container">
                <form>
                    <input type="text" value = {this.state.location} onChange={this.onChangeHandle}/>
                    <button onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        )
    }
}

module.exports = TempInput