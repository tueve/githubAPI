/**
 * Created by MilkyWay on 02/07/2017.
 */
var React = require('react')
var ReactDOM = require('react-dom')
var {Provider} = require('react-redux')

var App =  require('./components/App')

require('./index.scss')

ReactDOM.render(<Provider><App/></Provider>,document.getElementById('root'))

