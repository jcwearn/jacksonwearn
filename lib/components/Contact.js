const request = require('axios');
const React = require('react');
const ReactDOM = require('react-dom');
const contactData = require('../data/contact.json');

const generateControlGroup = (label, id, type, placeHolder, message, hasTextArea = false) => {
    const CustomInput = hasTextArea ? 'textarea' : 'input';
    const rows = hasTextArea ? { rows: '5' } : {};
    const inputType = hasTextArea ? { type: type } : {};

    return (
        <div key={id} className="row control-group">
            <div className="form-group col-xs-12 floating-label-form-group controls">
                <label>{label}</label>
                <CustomInput
                    className="form-control"
                    id={id}
                    { ...rows }
                    { ...inputType }
                    placeholder={placeHolder}
                    required=""
                    data-validation-required-message={message}
                    name={id}
                />
                <p className="help-block text-danger"></p>
            </div>
        </div>
    );
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    return request.post('/contact', {name, email, phone, message})
        .then((response) => {
            // Enable button & show success message
            $('#btnSubmit').attr('disabled', false);
            $('#success').html('<div class=\'alert alert-success\'>');
            $('#success > .alert-success').html('<button type=\'button\' class=\'close\' data-dismiss=\'alert\' aria-hidden=\'true\'>&times;')
                .append('</button>');
            $('#success > .alert-success')
                .append('<strong>Your message has been sent. </strong>');
            $('#success > .alert-success')
                .append('</div>');

            //clear all fields
            $('#contactForm').trigger('reset');
        })
        .catch((err) => {
            // Fail message
            $('#success').html('<div class=\'alert alert-danger\'>');
            $('#success > .alert-danger').html('<button type=\'button\' class=\'close\' data-dismiss=\'alert\' aria-hidden=\'true\'>&times;')
                .append('</button>');
            $('#success > .alert-danger').append('<strong>Sorry ' + firstName + ', it seems that my mail server is not responding. Please try again later!');
            $('#success > .alert-danger').append('</div>');
            //clear all fields
            $('#contactForm').trigger('reset');
        });
};

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <form id="contactForm" name="sentMessage" noValidate="" method="post" onSubmit={handleFormSubmit}>
                                {contactData.map((data) => {
                                    return generateControlGroup(data.label, data.id, data.type, data.placeHolder, data.message, data.hasTextArea);
                                })}
                                <br/>
                                <div id="success"></div>
                                <div className="row">
                                    <div className="form-group col-xs-12">
                                        <button className="btn btn-success btn-lg" type="submit">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

module.exports = Contact;
