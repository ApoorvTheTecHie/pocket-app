import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Navbar,
    Nav,
    NavItem,
    Image,
    Well,
    Button,
    Form,
    FormGroup,
    FormControl
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : {
                name : '',
                email : '',
                password : '',
                confirmPassword : ''
            }
        }
    }


    onChange = (key, e) => {
        let { user } = this.state;
        user[ key ] = e.target.value;
        this.setState({ user })
    }


    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.user);
    }

    onClear = (e) => {
        e.preventDefault();
        let { user } = this.state;
        this.setState({
           user: {
               name: '',
               email: '',
               password: '',
               confirmPassword: ''
           }
        });
    }


    render(){

        let { user } = this.state;
        return(
            <Grid style={{ padding: '0' }}>
                <Grid style={{ padding: '0' }}>
                    <Navbar style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.15)' }}>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">
                                    <Image
                                        className="logoStyleEditAccount"
                                        src="https://png.icons8.com/color/1600/get-pocket.png"
                                    />
                                    <label style={{ fontSize: '40px', fontWeight: '400' }}>pocket</label>
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
                </Grid>
                <Well style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ textAlign: 'center', fontWeight: '700' }}>Sign Up</h2>
                    <Form horizontal onSubmit={this.onSubmit}>
                        <FormGroup controlId="formHorizontalName">
                            <Col sm={10} style={{ width : '500px', marginLeft: '20px', marginTop: '10px' }}>
                                <FormControl
                                    value={user.name}
                                    onChange={this.onChange.bind(this, "name")}
                                    type="name"
                                    name="name"
                                    placeholder="Name"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={10} style={{ width: '500px', marginLeft: '20px', marginTop: '10px' }}>
                                <FormControl
                                    value={user.email}
                                    onChange={this.onChange.bind(this, "email")}
                                    name="email"
                                    placeholder="Email"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={10} style={{ width: '500px', marginLeft: '20px', marginTop: '10px' }}>
                                <FormControl
                                    value={user.password}
                                    onChange={this.onChange.bind(this, "password")}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalConfirmPassword">
                            <Col sm={10} style={{ width: '500px', marginLeft: '20px', marginTop: '10px' }}>
                                <FormControl
                                    value={user.confirmPassword}
                                    onChange={this.onChange.bind(this, "confirmPassword")}
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </Col>
                        </FormGroup>
                    
                    
                    <Button
                        type="submit"
                        style={{ width: '100%' }} 
                        bsStyle="danger">
                            Sign Up
                    </Button>
                    <Button
                        style={{ marginTop : '1em',width: '100%' }} 
                        onClick={this.onClear}>Clear
                    </Button>
                    <Link to="/login">
                        <p style={{ textAlign: 'center' }}>Sign In</p>
                    </Link>
                    </Form>
                </Well>
            </Grid>    
        );
    }
}