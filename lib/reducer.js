'use strict';

const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    displaySuccessDialog: false
};

function reducer(state = initialState, action) {
    switch (action.type) {

    case 'HANDLE_FORM_SUBMIT': {
        return Object.assign({}, state, {
            invalidInput: false,
            successful: action.successful,
            displaySuccessDialog: true,
            name: initialState.name,
            email: initialState.email,
            phone: initialState.phone,
            message: initialState.message
        });
    }

    case 'HANDLE_INPUT_CHANGED': {
        return Object.assign({}, state, {
            [action.field]: action.value
        });
    }

    case 'HANDLE_INVALID_INPUT': {
        return Object.assign({}, state, {
            invalidInput: true,
            displaySuccessDialog: true
        });
    }

    default: {
        return state;
    }

    }
}

module.exports = reducer;
