import React, { Component } from 'react';
import {
    Grid,
    Navbar,
    NavDropdown,
    NavItem,
    Nav,
    Well,
    MenuItem,
    Image,
    Row,
    Col
}from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class EditAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : {
                email : 'test@test.com'
            }
        }
    }
    render(){
        const { email } = this.state.user;
        return(
            <Grid style={{ padding : '0'}}>
                <Navbar style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.15)' }}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">
                                <Image 
                                    className="logoStyleEditAccount" 
                                    src="https://png.icons8.com/color/1600/get-pocket.png" 
                                /> 
                                <label style={{ fontSize : '40px', fontWeight : '400'}} >pocket</label>
                            </Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            How to Save
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Go Premium
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Support 
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            My List
                        </NavItem>
                    </Nav>
                </Navbar>
                <Row>
                    <Col md={12} lg={12} xs={12} sm={12} style={{ paddingLeft : '2%'}}>               
                        <Col md={4} lg={4} xs={12} sm={12}>
                            srgujroiguroigrpso
                        </Col>
                
                        <Col md={6} lg={6} xs={12} sm={12}>
                            <Well>
                                <h3 style={{ padding : '5px'}}> Edit Profile </h3>
                               <p>Your primary email is : {email}</p>
                               <p>Note: You can have more than one email associated with your account,
                               <Link to="/">click here to manage all associated emails.</Link></p>
                            </Well>
                        </Col>
                    </Col>
                </Row>
            </Grid>    
        );
    }
}