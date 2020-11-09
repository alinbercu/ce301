import React, { useState , useEffect, Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    DropdownOpen,
    UncontrolledDropdown
} from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import { logout } from '../actions/authActions';
import LoginModal from './auth/LoginModal';
import UserLogo from '../images/adult.svg';
import SettingsLogo from '../images/settings.svg';
import HistoryLogo from '../images/history.svg';
import LogoutLogo from '../images/logout.svg';

//const toggle = () => setDropdownOpen(!dropdownOpen);

function AppNavbar({auth, logout}) {

    const [isOpen, setIsOpen] = useState(false);
    
    const { isAuthenticated, user } = auth;


    const toggle = () => {
        setIsOpen(!isOpen);
    }


    const authLinks = () => {
        return (
            <Fragment>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret >
                        { user ? `${user.name}` : '' }

                        <img
                        src={UserLogo}
                        style={{ height: 35, marginLeft: '8px', marginRight: '5px', marginBottom: '5px' }}
                        alt="UserLogo"
                        />

                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>

                            <img
                            src={SettingsLogo}
                            style={{ height: 22, marginRight: '5px', marginBottom: '5px' }}
                            alt="SettingsLogo"
                            />

                            Settings
                        </DropdownItem>
                        <DropdownItem>
                            
                            <img
                            src={HistoryLogo}
                            style={{ height: 22, marginRight: '5px', marginBottom: '5px' }}
                            alt="HistoryLogo"
                            />

                            History
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={ logout } href="#">
                            <img
                            src={LogoutLogo}
                            style={{ height: 22, marginRight: '5px', marginBottom: '2px'}}
                            alt="LogoutLogo"
                            />

                            Log out
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown> 
                
            </Fragment>
        )
    }
    
    const guestLinks = () => {
        return (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        )
    }

        return (
            <div>
                <Navbar color="primary" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">SMS Website Logo</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {isAuthenticated ? authLinks() : guestLinks()}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

const mapStateToProps = state => ({
    auth: state.auth
});

AppNavbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

export default connect( mapStateToProps, { logout })(AppNavbar);