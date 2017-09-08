/**
 * Created by MilkyWay on 02/07/2017.
 */
const React = require('react')
const Api = require('../../ultils/Api')
const PropTypes = require('prop-types')
const Loading = require('../Loading/Loading')

function Avatar(props) {
    return (
    <a href={props.html_url}>
        <img src={props.avt_url} alt='img' className="avatar"/>
    </a>
    )
}

Avatar.propTypes = {
    html_url: PropTypes.string.isRequired,
    avt_url: PropTypes.string.isRequired
}

function ItemDetail(props) {
    return (
        <div className="detail--wrapper">
            <a href={props.html_url}>
                <h2 className="detail__item">{props.username}</h2>
            </a>
            <h2 className="detail__item">{props.login}</h2>
            <h2 className="detail__item">
                <span>Points: </span>
                <span>{props.star}</span>
            </h2>
        </div>
    )
}

ItemDetail.propTypes = {
    html_url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired
}

function ItemLanguage(props) {
    return (
        <div>
            <Avatar
                avt_url = {props.avt_url}
                html_url = {props.html_url}
            />
            <ItemDetail
                html_url = {props.html_url}
                username = {props.username}
                login = {props.login}
                star = {props.star}
            />
        </div>
    )
}

ItemLanguage.propTypes = {
    avt_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired
}

function ListItem(props) {
    return (
        <div className="list-item--wrapper">
            <ul className="list-item">
                {props.repos.map((item)=>{return (
                        <li key = {item.name} className="item--wrapper">
                            <ItemLanguage
                                avt_url = {item.owner.avatar_url}
                                html_url = {item.html_url}
                                username = {item.name}
                                login = {item.owner.login}
                                star = {item.stargazers_count}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

ListItem.propTypes = {
    repos: PropTypes.array.isRequired
}

function Languages(props) {
    const languages = ['All', 'HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR', 'VUE','PHP']
    return (
        <div className="languages--wrapper">
            <ul className="languages-list--wrapper">
                {languages.map(language=>{
                    return (
                        <li
                            className={props.selectedLanguage === language ? 'languages__item active' : 'languages__item'}
                            key={language}
                            onClick={props.onClickHandle.bind(null,language)}
                        >{language}</li>)
                })}
            </ul>
        </div>
    )
}

class Popular extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            language: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    componentDidMount() {
        this.updateLanguage(this.state.language)
    }

    updateLanguage(language) {
        this.setState(()=>{return {language: language, repos: null}})
        Api.fetchAPI(language).then(data=>{
            this.setState(()=>{return {repos: data}})
        })
    }

    render() {
        return (
            <div className="container">
                <Languages
                    onClickHandle={this.updateLanguage}
                    selectedLanguage = {this.state.language}
                />
                {this.state.repos === null ?
                    <Loading/> :
                    <ListItem
                        repos = {this.state.repos}
                    />}
            </div>
        )
    }
}

module.exports = Popular