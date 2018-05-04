import React from 'react';
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
    ControlLabel,
    FormControl
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : {
                userName : '',
                password : '',
            }
        }
    }
    render(){
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
                                    <label style={{ fontSize: '40px', fontWeight: '400' }} >pocket</label>
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
                    <Col>
                    <Col lg={6} md={6} sx={12} sm={12}>
                        <Image src="https://getpocket.com/i/v4/signup_graphic@1x.jpg" />
                    </Col>
                    <Col lg={6} md={6} sx={12} sm={12}>
                        <Well style={{ margin : '1em auto'}}>
                           <h2 style={{ textAlign : 'center', fontWeight : '700'}}>Log In</h2>
                           <Button>Log IN with google</Button> <br />
                            <Button>Log IN with facebook</Button>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col sm={10}>
                                        <FormControl type="email" placeholder="Email" />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalPassword">
                                    <Col sm={10}>
                                        <FormControl type="password" placeholder="Password" />
                                    </Col>
                                </FormGroup>
                            </Form>    
                        </Well>
                    </Col>
                </Col>
            </Grid>    
        );
    }
}