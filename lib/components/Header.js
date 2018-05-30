const React = require('react');

const handleOnClick = (elementId) => (event) => {
    event.preventDefault();
    const element = document.getElementById(elementId);
    return element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = (props) => {
    const aboutActive = props.aboutActive ? 'active' : '';
    const contactActive = props.contactActive ? 'active' : '';
    const shrinkNavbar = props.shrinkNavbar ? 'affix' : 'affix-top';
    return (
        <nav className={`navbar navbar-default navbar-fixed-top navbar-custom ${shrinkNavbar}`} id="mainNav">
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span className="sr-only">Toggle navigation</span> Menu<i className="fa fa-bars"></i></button><a className="navbar-brand" onClick={handleOnClick('page-top')}>Welcome</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className={`page-scroll ${aboutActive}`}><a onClick={handleOnClick('about')}>About</a></li>
                        <li className={`page-scroll ${contactActive}`}><a onClick={handleOnClick('contact')}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

module.exports = Header;
