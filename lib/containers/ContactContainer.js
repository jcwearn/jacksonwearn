const { connect } = require('react-redux');
const Contact = require('../components/Contact');

const mapStateToProps = (state) => {
    return {
        name: state.name,
        email: state.email,
        phone: state.phone,
        message: state.message,
        displaySuccessDialog: state.displaySucessDialog,
        successful: state.successful
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormSubmit: (successful) => (dispatch({ type: 'HANDLE_FORM_SUBMIT', successful })),
        handleInputChanged: (value, field) => (dispatch({ type: 'HANDLE_INPUT_CHANGED', value, field }))
    };
};

const ContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);

module.exports = ContactContainer;
