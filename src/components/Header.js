//File Name: Header.js
//Path: src/component/
//Description: This is common header component for all pages.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { assetsPrefix } from '../constants';
import { Grid, Row, Col, Nav, Navbar, Button, Image, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

export default class Header extends Component {


	render () {

		return (
			<Grid className="fullWidth">
				<Navbar collapseOnSelect className="borderColor" >
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#home"><Image className="logoStyle" src="https://png.icons8.com/color/1600/get-pocket.png"/> pocket</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#">
							Link
    					</NavItem>
						<NavItem eventKey={2} href="#">
							Link
    					</NavItem>
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.4}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>
			</Grid>
		);
	}
}
