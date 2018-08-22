import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
    renderNavbar = () => {
        if(this.props.loggedIn) {
            return (<Navbar fixedTop={true} inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Kucing Bertasbih</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Contact
                        </NavItem>
                        <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Celana Dalam</MenuItem>
                            <MenuItem eventKey={3.2}>Kancut</MenuItem>
                            <MenuItem eventKey={3.3}>Sempak</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Kutang</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Hello, {this.props.username}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
        }

        return (<Navbar fixedTop={true} inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">Kucing Bertasbih</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        About
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Contact
                    </NavItem>
                    <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Celana Dalam</MenuItem>
                        <MenuItem eventKey={3.2}>Kancut</MenuItem>
                        <MenuItem eventKey={3.3}>Sempak</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Kutang</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Login
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Register
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
    render() {
        return( 
            this.renderNavbar()
        );
    }
}

export default Header;