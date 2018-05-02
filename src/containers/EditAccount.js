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
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Form,
    Button
}from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
    SideNavEditAccount,
    FooterEditAccount
} from '../components';
export default class EditAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : {
                email : 'test@test.com',
                password : '2142423534'
            }
        }
    }

    onChange = (key, e) => {
        let { user } = this.state;
        user[key] = e.target.value;
        this.setState({ user });
    }

    onSubmit = ( e ) => {
        e.preventDefault();
        console.log(this.state.user);
    }

    render(){
        const { email, password } = this.state.user;
        return(
            <Grid style={{ padding: '0' }}>
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
                            <NavItem eventKey={1} href="/">
                                How to Save
                            </NavItem>
                            <NavItem eventKey={2} href="/">
                                Go Premium
                            </NavItem>
                            <NavItem eventKey={3} href="/">
                                Support 
                            </NavItem>
                            <NavItem eventKey={4} href="/">
                                My List
                            </NavItem>
                        </Nav>
                    </Navbar>
                
                    <Col md={12} lg={12} xs={12} sm={12} style={{ paddingLeft : '2%'}}>               
                        <Col md={4} lg={4} xs={12} sm={12}>
                        <SideNavEditAccount email={email} />
                        </Col>
                        <Col md={6} lg={6} xs={12} sm={12}>
                            <Well>
                                <h3 style={{ padding : '5px', textDecoration : 'underline', paddingBottom : '50px'}}> Edit Profile </h3>
                                <h4>Your primary email is : {email}</h4>
                                <p style={{ marginBottom : '20px'}}>Note: You can have more than one email associated with your account,
                                    <Link to="/">click here to manage all associated emails.</Link>
                                </p>
                                <div style={{ marginTop : '100px'}}> 
                                    <Link to="/"><p>Change Primary Email</p></Link>
                                    <Link to="/"><p>Change Password</p></Link>
                                    <Link to="/"><p>Change Username</p></Link>
                                </div>    
                                <Form horizontal onSubmit = {this.onSubmit} style={{ marginTop : '100px'}}>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Email
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl
                                                value={email}
                                                onChange={this.onChange.bind(this, "email")}
                                                type="email" 
                                                placeholder="Email" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalPassword">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Password
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl 
                                                value={password}
                                                onChange={this.onChange.bind(this, "password")}
                                                type="password" 
                                                placeholder="Password" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col smOffset={2} sm={10}>
                                            <Button
                                                bsStyle="danger" 
                                                type="submit"
                                                >Save Changes</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>    
                            </Well>
                        </Col>
                    </Col>                   
                </Grid>    
                <footer style={{ bottom: '0' }}>
                    <FooterEditAccount />
                </footer>
            </Grid>
        );
    }
}