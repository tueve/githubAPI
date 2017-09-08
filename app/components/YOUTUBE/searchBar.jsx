/**
 * Created by MilkyWay on 19/08/2017.
 */
const React = require('react')

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this)
    }

    onChangeValue(e){
       this.setState({
           searchText:e.target.value
       })
    }

    componentDidUpdate(prevProps,prevState) {
        this.state.searchText !== prevState.searchText ? this.props.onChangeHandle(this.state.searchText) : false
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.searchText}
                    onChange = {this.onChangeValue}
                />
            </div>
        )
    }
}

module.exports = SearchBar