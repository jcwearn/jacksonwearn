const { createLogic } = require('redux-logic');

module.exports = createLogic({
    type: 'SET_SCROLL_OFFSET',
    latest: true,

    process: function({ action }, dispatch, done) {
        const { scrollOffset } = action;
        if (scrollOffset >= 100) {
            dispatch({ type: 'SHRINK_NAVBAR', shrinkNavbar: true });
        } else {
            dispatch({ type: 'SHRINK_NAVBAR', shrinkNavbar: false });
        }

        if (scrollOffset >= 745 && scrollOffset < 1237) {
            dispatch({ type: 'SET_LINK_ACTIVE', link: 'about', value: true });
        } else {
            dispatch({ type: 'SET_LINK_ACTIVE', link: 'about', value: false });
        }

        if (scrollOffset >= 1237) {
            dispatch({ type: 'SET_LINK_ACTIVE', link: 'contact', value: true });
        } else {
            dispatch({ type: 'SET_LINK_ACTIVE', link: 'contact', value: false });
        }

        done();
    }
});
