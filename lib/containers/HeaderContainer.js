const { connect } = require('react-redux');
const Header = require('../components/Header');

const mapStateToProps = (state) => {
    return {
        shrinkNavbar: state.shrinkNavbar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        shrink: (shrinkNavbar) => (dispatch({ type: 'SHRINK_NAV_BAR', shrinkNavbar }))
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

module.exports = HeaderContainer;
