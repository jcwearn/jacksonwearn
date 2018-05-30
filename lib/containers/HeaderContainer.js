const { connect } = require('react-redux');
const Header = require('../components/Header');

const mapStateToProps = (state) => {
    return {
        aboutActive: state.aboutActive,
        contactActive: state.contactActive,
        shrinkNavbar: state.shrinkNavbar
    };
};

module.exports = connect(mapStateToProps)(Header);
