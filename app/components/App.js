/**
 * Created by MilkyWay on 02/07/2017.
 */
const React = require('react')
const Popular = require('./Popular/Popular')
const Nav = require('./Nav/Nav')
const Homepage = require('./Homepage/Homepage')
const Battle = require('./Battle/Battle')
const Training = require('./TRAINING/Training')
const TemperatureForm = require('./TRAINING/TemperatureForm/TempForm')
const Counter = require('./TRAINING/Timer/Counter')
const CountDown = require('./TRAINING/Timer/CountDown')
const Youtube = require('./YOUTUBE/youtube')
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
                        <Route path='/popular' component={Popular }/>
                        <Route path='/' exact component={Homepage}/>
                        <Route path='/battle' exact component={Battle}/>
                        <Route path='/training' exact component={Training}/>
                        <Route path='/training?timer=counter' component={Counter}/>
                        <Route path='/training/timer/countdown' component={Counter}/>
                        <Route path='/training/temperature' component={TemperatureForm}/>
                        <Route path='/youtube' component={Youtube}/>
                        <Route render={()=>{return (<p>Not found</p>)}}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App