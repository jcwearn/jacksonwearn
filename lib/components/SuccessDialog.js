const React = require('react');

const SuccessDialog = (props) => {
    if (props.displaySuccessDialog) {
        const className = props.successful ? 'alert-success' : 'alert-danger';
        const message = props.successful ? 'Your message has been sent.' : 'Sorry, it seems that my mail server is not responding. Please try again later!';
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
