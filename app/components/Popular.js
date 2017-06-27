var React = require('react');
var PropTypes = require('prop-types');
var api  = require('../utils/api');
var LoadingSpinner = require('./LoadingSpinner')

function ItemGrid(props) {
  return (
    <ul className = 'popular-list'>
      {
        props.repos.map((repo,key)=>{
          return (
            <li
              key = {key}
              className= 'popular-item'
            >
              <div>#Rank {key+1}</div>
              <GitItem
                html_url = {repo.html_url}
                avatar_url = {repo.owner.avatar_url}
                login_name = {repo.owner.login}
                name = {repo.name}
                star_count = {repo.stargazers_count}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

ItemGrid.propTypes = {
    repos: PropTypes.array.isRequired
}

function GitItem(props) {
  return (
    <ul className='space-list-items'>
      <li className = 'popular-item'>
        <a href={props.html_url}>
        <img
          className ='avatar'
          src={props.avatar_url}
          alt={'Avatar for ' + props.login_name}
          />
        </a>
      </li>
      <li><a href={props.html_url}>{props.name}</a></li>
      <li>{props.login_name}</li>
      <li>{props.star_count} stars</li>
    </ul>
  )
}

GitItem.propTypes = {
    html_url: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    login_name: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    star_count: PropTypes.number.isRequired
}

function SelectLanguage(props) {
  const languages = ['All','Javascript','CSS','JQUERY','REACT','ANGULAR','VUE'];
  return (
    <ul className = 'languages'>
      {languages.map((lang)=>{
        return(
          <li
            className ='language-item'
            key = {lang}
            onClick = {props.onSelect.bind(null,lang)}
            style = {lang === props.selectedLanguage ? {color:'red'} :null}
          >
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      selectedLanguage :'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(()=>{return{selectedLanguage: lang, repos: null} });
    api.fetchPopularRepos(lang)
      .then((repos)=>{
        this.setState(()=>{
          return {
            repos: repos
          }
        })
      })
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  render() {
    return(
      <div>
        <SelectLanguage
          onSelect = {this.updateLanguage}
          selectedLanguage = {this.state.selectedLanguage}
        />
        {!this.state.repos ? <LoadingSpinner text='loading' speed={350}/> : <ItemGrid repos = {this.state.repos}/>}
      </div>
    )
  }
}

module.exports = Popular;
