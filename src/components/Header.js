import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { assetsPrefix } from '../constants';
import { 
	Grid, 
	Row, 
	Col, 
	Nav, 
	Navbar, 
	Button, 
	Image, 
	NavItem, 
	NavDropdown, 
	MenuItem, 
	Tooltip, 
	ButtonToolbar,
	OverlayTrigger ,
	Modal
} from 'react-bootstrap';

export default class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			showModal : false
		}
	}
	render () {
		const { showModal } = this.state;
		const tooltipEnvelope = (
			<Tooltip id="tooltip">
				View Inbox
  			</Tooltip>
		);

		const tooltipSearch = (
			<Tooltip id="tooltip">
				Search
  			</Tooltip>
		);

		const tooltipPlus = (
			<Tooltip id="tooltip">
				Save a URL
  			</Tooltip>
		);

		return (

			/* NavBar Design */

			<Grid className="fullWidth">
				<Navbar 
					collapseOnSelect 
					fixedTop 
					className="borderColor" 
				>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/"><Image className="logoStyle" src="https://png.icons8.com/color/1600/get-pocket.png"/> pocket</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Nav style={{ paddingBottom : '0px'}}>
						<NavItem className="underLine" eventKey={1} href="#">
							<Link to="/"><label className="textStyle">Home</label></Link>
    					</NavItem>
						<NavItem className="underLine" eventKey={2} href="#">
							<Link to="/recommended"><label className="textStyle">Recommended</label></Link>
						</NavItem>
						<NavItem className="underLine" eventKey={2} href="#">
							<label className="textStyle">Explore <i className="fas fa-angle-right"></i></label>
    					</NavItem>
					</Nav>
				
					<Nav pullRight>
						<NavItem>
							<OverlayTrigger placement="bottom" overlay={tooltipSearch}>
								<Button style={{ border: '0' }} bsStyle="default">
									<i className="fas fa-search textStyle"></i>
								</Button>
							</OverlayTrigger>	

							<OverlayTrigger placement="bottom" overlay={tooltipPlus}>
								<Button onClick={() => {
									showModal ? this.setState({ showModal : false}) : this.setState({ showModal : true})
								}} style={{ border: '0' }} bsStyle="default">
									<i className="fas fa-plus textStyle"></i>
								</Button>
							</OverlayTrigger>

							<OverlayTrigger placement="bottom" overlay={tooltipEnvelope}>
							<Button style={{ border: '0' }} bsStyle="default">
								<i className="fas fa-envelope textStyle"></i>
							</Button>
							</OverlayTrigger>
						
						</NavItem>	  
						<NavItem>
							<Image
								className="logoStyleRight"
								src="https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png" circle />
						
						</NavItem> 
						<NavDropdown style={{ padding : 0}} eventKey={3} title="Apoorv" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>
								<Link to="/editprofile"><Image
									className="logoStyleDropDown"
									src="https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png" 
									circle 
								/></Link>
								<h5><strong>Apoorv Singh</strong></h5>
								<p className="viewProfile">View Profile</p>
							</MenuItem>
							<MenuItem eventKey={3.2}><i className="fas fa-certificate"></i> &nbsp;Premium</MenuItem>
							<MenuItem eventKey={3.3}><i className="fas fa-question-circle"></i> &nbsp;Help</MenuItem>
							<MenuItem eventKey={3.4}><i className="fas fa-cog"></i> &nbsp;Options</MenuItem>
							<MenuItem eventKey={3.5}><i className="fas fa-sign-out-alt"></i> &nbsp;Logout</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>

				{/* SideNav Design */}

				<div className="sidenav">
					<Link to="/"><p style={{ color: '#a6a6a6'}}>My List</p></Link>
					<Link to="/favorites"><p style={{ color: 'black' }}>Favorites</p></Link>
					<Link to="/archive"><p style={{ color: 'black' }}>Archive</p></Link>
					<hr />
					<Link to="/articles">Articles</Link>
					<Link to="/videos">Videos</Link>
					<Link to="/images">Images</Link>
					<a href="#">Tags <i className="fas fa-angle-right"></i></a>
				</div>

				{/* Modal Element */}

				<Modal show={showModal}>
					<Modal.Header closeButton onClick={() => this.setState({ showModal: false })}>
						<Modal.Title>Save an item to pocket</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						url : <input style={{ width : '90%'}} />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => {
							this.setState({ showModal: false })
							alert("URL added successfully")						
						}}>Add</Button>
						<Button onClick={() => this.setState({ showModal : false})}>Close</Button>
					</Modal.Footer>
				</Modal>
			</Grid>
		);
	}
}


		