var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
// var Link = ReactRouter.Link;
var Switch = ReactRouter.Switch;

var Home = require('./Home');
var Popular = require('./Popular');
var Battle = require('./Battle');
var Nav = require('./Nav');
var Results = require('./Results');
var DialogError = require('./DialogError');
class App extends React.Component {
  render() {
    return (
        <Router>
            <div className="container">
                <Nav/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/battle' component={Battle}/>
                    <Route path='/popular' component={Popular}/>
                    <Route path='/battle/results' component={Results}/>
                    <Route render ={()=>{
                        return (
                            <DialogError/>
                        )
                    }}
                    />
                </Switch>
            </div>
        </Router>
    )
  }
}

module.exports = App;
