const React = require('react');
const ReactDOM = require('react-dom');

const Intro = (props) => {
    return (
        <header className="me">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12"><img className="img-responsive" src="images/me.jpg" alt="Jackson Wearn"/>
                        <div className="intro-text"><span className="name">Jackson Wearn</span><span className="skills"> {props.jobTitle} at
                            <a className="btn btn-cb btn-success" href={props.companyUrl}>
                                {props.companyTitle}
                            </a>
                        </span></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

module.exports = Intro;
