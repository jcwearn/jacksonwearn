const React = require('react');

const About = (props) => {
    return (
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3">
                        <p style={{textAlign: 'center'}}>{props.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

module.exports = About;
