const React = require('react');

const getClassName = (successful, invalidInput) => {
    if (invalidInput) return 'alert-warning';
    return successful ? 'alert-success' : 'alert-danger';
};

const getMessage = (successful, invalidInput) => {
    if (invalidInput) return 'Sorry, it seems that the input is invalid.  Double check your input and try again.';
    return successful ? 'Your message has been sent.' : 'Sorry, it seems that my mail server is not responding. Please try again later!';
};

const SuccessDialog = (props) => {
    if (props.displaySuccessDialog) {
        const className = getClassName(props.successful, props.invalidInput);
        const message = getMessage(props.successful, props.invalidInput);
        return (
            <div className={`alert ${className}`}>
                <button type='button' className='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                <strong>{ message }</strong>
            </div>
        );
    }

    return null;
};

module.exports = SuccessDialog;
