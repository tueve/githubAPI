/**
 * Created by MilkyWay on 02/07/2017.
 */

const React = require('react')
const api = require('../../ultils/Api')
const Link = require('react-router-dom').Link

class PlayerInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="player-info__img">
                    <img src={this.props.img_src} alt="img"/>
                </div>
                <h2 className="player-info__name">{this.props.username}</h2>
                <h3 onClick={this.props.onReset.bind(null,this.props.id)}>reset</h3>
            </div>
        )
    }
}

class PlayerInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({userName: event.target.value});
    }

    onHandleSubmit(e) {
        e.preventDefault()
        this.props.onHandleSubmit(this.props.id,this.state.userName)
    }

    render() {
        return (
            <form className="player-input__wrapper" onSubmit={this.onHandleSubmit}>
                <h2 className="player-input__label">player {this.props.id}</h2>
                <div className="player-input__input">
                    <input type="text" onChange={this.handleChange} value={this.state.userName}/>
                </div>
                <div className="player-input__submitBtn">
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}

class Battle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username1: null,
            img1: '',
            username2: null,
            img2: ''
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.resetHandle = this.resetHandle.bind(this)
        this.getUsername = this.getUsername.bind(this)
    }

    onHandleSubmit(id,username){
        let newState = []
        newState['username' + id] = username
        newState['img'+ id] = 'https://github.com/' + username + '.png?size=200'

        this.setState(()=>{
            return newState
        })
    }

    resetHandle(id) {
        let newState = []
        newState['username' + id] = ''
        newState['img'+ id] = null

        this.setState(()=>{
            return newState
        })
    }

    getUsername(){
        api.battle(this.state.username1)
    }

    render() {
        const username1 = this.state.username1
        const username2 = this.state.username2
        const img1 = this.state.img1
        const img2 = this.state.img2
        const match = this.props.match
        return (
            <div className="container">
                <h2>battle</h2>
                {!username1 && <PlayerInput id='1' onHandleSubmit = {this.onHandleSubmit}/>}
                {!username2 && <PlayerInput id='2' onHandleSubmit = {this.onHandleSubmit}/>}
                {img1 && <PlayerInfo img_src = {img1} username = {username1} onReset = {this.resetHandle} id = '1'/>}
                {img2 && <PlayerInfo img_src = {img2} username = {username2} onReset = {this.resetHandle} id = '2'/>}
                {
                    img1 && img2 &&
                    <Link
                        className='button'
                        to={{
                            pathname: match.url + '/result',
                            search: '?'+ +'=' + username1 + '&playerTwoName=' + username2
                        }}>
                        Battle
                    </Link>}
                }
            </div>
        )
    }
}

module.exports = Battle