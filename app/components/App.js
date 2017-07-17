/**
 * Created by MilkyWay on 02/07/2017.
 */
const React = require('react')
const Popular = require('./Popular/Popular')
const Nav = require('./Nav/Nav')
const Homepage = require('./Homepage/Homepage')
const Battle = require('./Battle/Battle')
const Switch = require('react-router-dom').Switch
const Router = require('react-router-dom').BrowserRouter
const Route = require('react-router-dom').Route

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <h1>Hello World</h1>
                    <Switch>
                        <Route path='/popular' component={Popular}/>
                        <Route path='/' exact component={Homepage}/>
                        <Route path='/battle' exact component={Battle}/>
                        <Route render={()=>{return (<p>Not found</p>)}}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App