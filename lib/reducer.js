'use strict';

const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    displaySuccessDialog: false,
    shrinkNavbar: false,
    scrollOffset: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {

    case 'CLOSE_SUCCESS_DIALOG': {
        return Object.assign({}, state, {
            displaySuccessDialog: false
        });
    }

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

    case 'SET_LINK_ACTIVE': {
        return Object.assign({}, state, {
            [`${action.link}Active`]: action.value
        });
    }

    case 'SET_SCROLL_OFFSET': {
        return Object.assign({}, state, {
            scrollOffset: action.scrollOffset
        });
    }

    case 'SHRINK_NAVBAR': {
        return Object.assign({}, state, {
            shrinkNavbar: action.shrinkNavbar
        });
    }

    default: {
        return state;
    }

    }
}

module.exports = reducer;
