const { connect } = require('react-redux');
const Contact = require('../components/Contact');

const mapStateToProps = (state) => {
    return {
        name: state.name,
        email: state.email,
        phone: state.phone,
        message: state.message,
        displaySuccessDialog: state.displaySuccessDialog,
        successful: state.successful,
        invalidInput: state.invalidInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeSuccessDialog: () => (dispatch({ type: 'CLOSE_SUCCESS_DIALOG'})),
        handleFormSubmit: (successful) => (dispatch({ type: 'HANDLE_FORM_SUBMIT', successful })),
        handleInputChanged: (value, field) => (dispatch({ type: 'HANDLE_INPUT_CHANGED', value, field })),
        handleInvalidInput: () => (dispatch({ type: 'HANDLE_INVALID_INPUT' }))
    };
};

const ContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);

module.exports = ContactContainer;
