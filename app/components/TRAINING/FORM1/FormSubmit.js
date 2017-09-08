/**
 * Created by MilkyWay on 18/07/2017.
 */
const React = require('react')

function MessageHello(props) {
    return(
        <div className="container">
            <h2>Hello {props.name}</h2>
            <h3>{props.message}</h3>
        </div>
    )
}

class FormInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            message: ''
        }

        this.nameChangeHandle = this.nameChangeHandle.bind(this)
        this.messageHandle = this.messageHandle.bind(this)
        this.submitEvent = this.submitEvent.bind(this)
    }

    nameChangeHandle(e) {
        this.setState({name:e.target.value})
    }

    messageHandle(e) {
        this.setState({message:e.target.value})
    }

    submitEvent(e) {
        e.preventDefault()
        this.props.onSubmitEvent(this.state.name,this.state.message)
    }

    render(){
        const name = this.state.name
        const message = this.state.message
        return(
            <div className="container">
                <form>
                    <input type="text" value={name} onChange={this.nameChangeHandle}/>
                    <textarea name="text-message" id="text-message" cols="30" rows="10" value={message} onChange={this.messageHandle}/>
                    <button onClick={this.submitEvent}>submit</button>
                </form>
            </div>
        )
    }
}

class FormSubmit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            message: this.props.message
        }
        this.submitEvent = this.submitEvent.bind(this)
    }

    submitEvent(name,message) {
        this.setState({name: name,message:message})
    }

    render() {
        return (
            <div className="container">
                <MessageHello name={this.state.name} message={this.state.message}/>
                <FormInput onSubmitEvent = {this.submitEvent}/>
            </div>
        )
    }
}

FormSubmit.defaultProps = {
    name: 'React',
    message: ' Hello'
}

module.exports = FormSubmit