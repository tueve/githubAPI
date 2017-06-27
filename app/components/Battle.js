var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var DialogError = require('./DialogError');
var api = require('../utils/api');
var { Position, Toaster, Intent } = require('@blueprintjs/core');

const MyToaster = Toaster.create({
    className: "my-toaster",
    position: Position.TOP_LEFT,
});

function PlayerReview(props) {
    return (
        <div className="player-review">
            <div className="player-review__username">
                <h2>
                    {props.username}
                </h2>
            </div>
            <div className="player-review__img">
                <img src={props.avatar} className="avatar"/>
            </div>
            <button
                onClick={props.onReset.bind(null,props.id)}
                className="pt-button pt-icon-delete"
            >Reset</button>
        </div>
    )
}

class PlayerInput extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            canSubmit: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;

        this.setState(()=>{
            return {username: value}
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit (
            this.props.id,
            this.state.username
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="select-user-form">
                    <label htmlFor='username' className="pt-label">
                        {this.props.label}
                    </label>
                    <input
                        type = "text"
                        className="pt-input pt-intent-primary pt-large select-user-form__input"
                        id = 'username'
                        placeholder = 'github username'
                        value = {this.state.username}
                        autoComplete = 'off'
                        onChange = {this.handleChange}
                    />
                    <button
                        type='submit'
                        className="pt-button pt-icon-search pt-large select-user-form__button"
                        disabled={!this.state.username}
                    >Search</button>
                </form>
                <MyAppForm/>
            </div>
        )
    }
}

PlayerInput.proptypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerOneImage: null,
            playerTwoImage: null,
            playerOneName: '',
            playerTwoName: ''
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.validateUser = this.validateUser.bind(this);
    }

    handleEvent(id,user) {
        this.setState(()=>{
            let newState = {};
            newState[id + 'Name'] = user;
            newState[id + 'Image'] = 'https://github.com/' + user + '.png?size=200';
            return newState;
        })
        api.user(user).then(response =>{
            console.log(response)
            if(response === 0) {
                this.handleReset(id);
                MyToaster.show({
                    message: 'INVALID USER ! PLEASE TRY AGAIN !',
                    intent: Intent.WARNING,
                    onDissmiss: 2000
                });
            }
        })
    }

    validateUser(user) {
        api.user(user).then(response =>{console.log(response)})
    }

    handleReset(id) {
        this.setState(()=>{
            let defaultState = {};
            defaultState[id + 'Name'] = '';
            defaultState[id + 'Image'] = null;
            return defaultState;
        })
    }


    render() {
        const match = this.props.match;
        const playerOneName = this.state.playerOneName;
        const playerTwoName = this.state.playerTwoName;
        const playerOneImage =  this.state.playerOneImage;
        const playerTwoImage = this.state.playerTwoImage;

        return (
            <div>
               <div className="row">
                   {
                       !playerOneName &&
                       <PlayerInput
                           id="playerOne"
                           label = "playerOne"
                           onSubmit= {this.handleEvent}
                        />}
                   {
                       !playerTwoName &&
                       <PlayerInput
                            id="playerTwo"
                            label = "playerTwo"
                            onSubmit = {this.handleEvent}
                       />
                   }
                   {
                       playerOneImage !== null &&
                       <PlayerReview
                            avatar = {playerOneImage}
                            username = {playerOneName}
                            onReset = {this.handleReset}
                            id = "playerOne"
                       />
                   }
                   {
                       playerTwoImage !== null &&
                       <PlayerReview
                            avatar = {playerTwoImage}
                            username = {playerTwoName}
                            onReset = {this.handleReset}
                            id = "playerTwo"
                       />
                   }
               </div>
                {
                    playerOneImage && playerTwoImage &&
                    <Link
                        className='button'
                        to={{
                            pathname: match.url + '/results',
                            search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                        }}>
                        Battle
                    </Link>
                }
            </div>
        )
    }
}

module.exports = Battle ;