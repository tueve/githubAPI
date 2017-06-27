var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var PropTypes = require('prop-types');
var LoadingSpinner = require('./LoadingSpinner');
var DialogError = require('./DialogError');

function PlayerInfo(props) {
    const gitUrl = props.html_url
    return (
        <div className='player-info'>
            <a href={gitUrl}>
                <div className='player-image'>
                    <img src={props.avatar_url} className='avatar'/>
                </div>
            </a>
            <div className='player-review'>
                <a href={gitUrl}>
                    {props.name && <h3>{props.name}</h3>}
                </a>
                <h3 className='player-review__item'>
                    <span>followers: </span>
                    <span>{props.followers}</span>
                </h3>
                <h3 className='player-review__item'>
                    <span>following: </span>
                    <span>{props.following}</span>
                </h3>
                {props.blog && <a href={props.blog}><h3>{props.blog}</h3></a>}
                <h3 className='player-review__score'>{props.score}</h3>
            </div>
        </div>
    )
}

PlayerInfo.propTypes = {
    html_url: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    blog: PropTypes.string.isRequired
}

class Results extends  React.Component {
    constructor(props){
        super(props)
        this.state = {
            winner : null,
            loser : null,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        const players = queryString.parse(this.props.location.search)
        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then(results=>{
            if(results === null) {
                return this.setState(()=>{return {
                    error: 'error',
                    loading: false
                }})
            }
            this.setState(()=>{
                return {
                    winner: results[1],
                    loser: results[0],
                    loading: false,
                    error: null
                }
            })
        })
            .catch(()=>{return <DialogError/>})
    }

    render() {
        let winner = this.state.winner;
        let loser = this.state.loser;
        let error = this.state.error;
        let loading = this.state.loading;

        if(loading) {
            return <LoadingSpinner/>
        }
        else if(error) {
            return <p>{error}</p>
        }
        else {
            return (
                <div className='player-wrapper'>
                    <div className='player-item'>
                        <h2>WINNER</h2>
                        <PlayerInfo
                            html_url={winner.profile.html_url}
                            avatar_url={winner.profile.avatar_url}
                            name = {winner.profile.name}
                            followers = {winner.profile.followers}
                            following = {winner.profile.following}
                            score = {winner.score}
                            blog = {winner.profile.blog}
                        />
                    </div>
                    <div className='player-item'>
                        <h2>LOSER</h2>
                        <PlayerInfo
                            html_url={loser.profile.html_url}
                            avatar_url={loser.profile.avatar_url}
                            name = {loser.profile.name}
                            followers = {loser.profile.followers}
                            following = {loser.profile.following}
                            score = {loser.score}
                            blog = {loser.profile.blog}
                        />
                    </div>
                </div>
            )
        }
    }
}

module.exports = Results;