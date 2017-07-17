// /**
//  * Created by MilkyWay on 14/07/2017.
//  */
// var React = require('react')
//
// function HelloMessage(props) {
//     return(
//         <div className="container">
//             <h1 className="hello-mess">
//                 {props.helloMessage}
//             </h1>
//         </div>
//     )
// }
//
// class FormInput extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name:''
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//
//     handleChange(event) {
//         this.setState({name: event.target.value},()=>{this.props.onChangeHandle(this.state.name)})
//     }
//
//     render() {
//         return (
//             <form>
//                 <input type="text" value = {this.state.name} onChange = {this.handleChange}></input>
//             </form>
//         )
//     }
// }
//
// class FormGetInput extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: this.props.name
//         }
//
//         this.onChangeHandle = this.onChangeHandle.bind(this)
//     }
//
//     onChangeHandle(name) {
//         this.setState({name:name})
//         console.log(name,'parent')
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <HelloMessage helloMessage = {'Hello ' + this.state.name}/>
//                 <FormInput onChangeHandle = {this.onChangeHandle}/>
//             </div>
//         )
//     }
// }
//
// FormGetInput.defaultProps = {
//     name: 'Tue'
// }
//
// module.exports = FormGetInput
const React = require('react')
function HelloMessage(props) {
    return(
        <div>
            <h1>{props.helloMessage}</h1>
        </div>
    )
}

class FormInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onChangeHandle(e) {
        this.setState({name:e.target.value})
    }

    componentDidUpdate(prevProps,prevState) {
        this.state.name !== prevState.name ? this.props.onChangeHandle(this.state.name) : false
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.onChangeHandle}/>
            </div>
        )
    }
}

class FormGetInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name
        }

        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onChangeHandle(name) {
        this.setState({name: name})
    }

    render() {
        return (
            <div>
                <HelloMessage helloMessage = {'Hello ' + this.state.name}/>
                <FormInput onChangeHandle = {this.onChangeHandle}/>
            </div>
        )
    }

}

FormGetInput.defaultProps = {
    name: 'ABC'
}

module.exports = FormGetInput