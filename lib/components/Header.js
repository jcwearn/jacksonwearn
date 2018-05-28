const React = require('react');
const ReactDOM = require('react-dom');

const Header = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top navbar-custom" id="mainNav">
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span className="sr-only">Toggle navigation</span> Menu<i className="fa fa-bars"></i></button><a className="navbar-brand" href="#page-top">Welcome</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden"><a href="#page-top"></a></li>
                        <li className="page-scroll"><a href="#about">About</a></li>
                        <li className="page-scroll"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

module.exports = Header;
