/**
 * Created by MilkyWay on 25/06/2017.
 */
var React = require('react')
var Link = require('react-router-dom').Link;

function DialogError(props) {
    return(
        <div className="text-wrapper">
            <div className="pt-dialog">
                <div className="pt-dialog-header">
                    <span className="pt-icon-large pt-icon-inbox"></span>
                    <h5>PAGE NOT FOUND</h5>
                    <Link to='./'>
                        <button className="pt-dialog-close-button pt-icon-small-cross"></button>
                    </Link>
                </div>
                <div className="pt-dialog-body">
                    This url is not found !!!
                </div>
                <div className="pt-dialog-footer">
                    <div className="pt-dialog-footer-actions">
                        <Link to="./battle">
                            <button className="pt-button">Battle Page</button>
                        </Link>
                        <Link to="./popular">
                            <button className="pt-button pt-intent-primary">Popular Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

module.exports = DialogError;