const React = require('react');
require('../Timer/Timer.scss')

function Clock(props) {
    let mins = props.mins >9 ? props.mins : `0${props.mins}`
    let sec = props.sec < 10 ? `0${props.sec}` : props.sec
    return(
        <div className="clock-wrapper">
            <div className="clock-circle">
                <div className="unit">{mins}</div>
                <span>:</span>
                <div className="unit">{sec}</div>
            </div>
        </div>
    )
}

Clock.defaultProps = {
    mins: 0,
    sec: 0
}

module.exports = Clock