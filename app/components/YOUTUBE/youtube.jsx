/**
 * Created by MilkyWay on 19/08/2017.
 */
const React = require('react')
const SearchBar = require('./searchBar')
const api = require('../../ultils/Api')


class Youtube extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos:[]
        }
        this.onChangHandle = this.onChangHandle.bind(this)
    }

    componentDidMount(){
        api.youtubeAPI('lift').then(res=>console.log(res))
    }

    onChangHandle(value){
        api.youtubeAPI(value).then(res=>console.log(res))
    }

    render() {
        return (

        <div>
            <h1>this is my youtube</h1>
            <SearchBar onChangeHandle  = {this.onChangHandle}/>
        </div>
        )
    }
}

module.exports = Youtube
