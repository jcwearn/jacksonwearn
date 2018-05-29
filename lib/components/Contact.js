const request = require('axios');
const React = require('react');
const ReactDOM = require('react-dom');
const SuccessDialog = require('./SuccessDialog');
const contactData = require('../data/contact.json');

const generateControlGroup = (value, label, id, type, placeHolder, message, hasTextArea = false, dispatchHandleInputChanged) => {
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
                    value={value}
                    onChange={handleInputChange(id, dispatchHandleInputChanged)}
                />
                <p className="help-block text-danger"></p>
            </div>
        </div>
    );
};

const handleInputChange = (field, dispatchHandleInputChange) => (event) => {
    event.preventDefault();
    const value = event.target.value;
    return dispatchHandleInputChange(value, field);
};

const handleFormSubmit = (props) => (event) => {
    event.preventDefault();
    const payload = { name: props.name, email: props.email, phone: props.phone, message: props.message };

    return request.post('/contact', payload)
        .then((response) => props.handleFormSubmit(true))
        .catch((err) => props.handleFormSubmit(false));
};

const Contact = (props) => {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <form id="contactForm" name="sentMessage" noValidate="" onSubmit={handleFormSubmit(props)}>
                                {contactData.map((data) => {
                                    const value = props[data.id];
                                    return generateControlGroup(value, data.label, data.id, data.type, data.placeHolder, data.message, data.hasTextArea, props.handleInputChanged);
                                })}
                                <br/>
                                <div id="success">
                                    <SuccessDialog
                                        displaySuccessDialog={props.displaySuccessDialog}
                                        successful={props.succesful}
                                    />
                                </div>
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
