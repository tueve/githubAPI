var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component{
    render() {
        return (
            <div className="container">
                <h1>Homepage</h1>
                <Link to="./battle">
                    <button className="pt-button pt-icon-satellite">
                        Battle
                    </button>
                </Link>
            </div>
        )
    }
}

module.exports = Home;