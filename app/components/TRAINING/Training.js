/**
 * Created by MilkyWay on 18/07/2017.
 */
const React = require('react')
const Form1 = require('./FORM1/FormSubmit')
const Timer = require('./Timer/Clock')
const TemperatureForm = require('../TRAINING/TemperatureForm/TempForm')
const Counter =  require('./Timer/Counter')
const CountDown =  require('./Timer/CountDown')
const NavLink = require('react-router-dom').NavLink
const { bindActionCreators } = require('redux')
const { connect } = require('react-redux')


function Training(props){
    const match = props.match
    const search = props.location.search
    console.log(search)
    return(
        <div className="container">
            <ul>
                <li>
                    <NavLink to={{search: '?temperature'}} activeClassName='active'>temperature</NavLink>
                </li>
                <li>
                    <NavLink
                        to={{
                            pathname: match.url,
                            search: '?timer=countdown'
                        }}
                    >
                        Countdown</NavLink>
                </li>
                <li>
                    <NavLink to={{
                        pathname: match.url,
                        search: '?timer=counter'
                    }}>Counter</NavLink>
                </li>
            </ul>

            <div className="container">
                {search === '?timer=counter' && <Counter/>}
                {search === '?timer=countdown' && <CountDown/>}
                {search === '?temperature' || !search && <TemperatureForm/>}
            </div>
        </div>
    )
}

module.exports = Training
