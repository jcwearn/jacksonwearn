const React = require('react');
const ReactDOM = require('react-dom');

const Footer = () => {
    return (
    	<footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-12">
                <h3>Around the Web</h3>
                <ul className="list-inline">
                  <li><a className="btn-social btn-outline" href="https://www.facebook.com/jackson.wearn"><i className="fa fa-fw fa-facebook"></i></a></li>
                  <li><a className="btn-social btn-outline" href="https://www.linkedin.com/in/jackson-wearn/"><i className="fa fa-fw fa-linkedin"></i></a></li>
                  <li><a className="btn-social btn-outline" href="https://github.com/jcwearn"><i className="fa fa-fw fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">Copyright © Jackson Wearn 2017</div>
            </div>
          </div>
        </div>
      </footer>
    );
};

module.exports = Footer;
