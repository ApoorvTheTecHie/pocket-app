import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Image,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class EditProfile extends Component{

    render(){
        
        return(
            <Grid>
                <Row>
                    <Col style={{ padding : '20px'}}>
                        <Link to="/">
                            <Image className="logoStyleEditPage" src="https://png.icons8.com/color/1600/get-pocket.png" />
                            <label style={{ fontSize : '25px'}}>pocket</label>
                        </Link>
                        <Link to="/editaccount"><label style={{ float : 'right'}}> Edit </label></Link>                        
                    </Col>
                </Row>
                <Row>
                    <Col style={{display : 'flex', justifyContent : 'center'}}>
                        <Image
                            style={{ height : '150px', width : '150px'}} 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png" 
                            circle 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                       <label style={{ fontSize : '30px'}}>Apoorv Singh</label>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ color : 'white', backgroundColor: '#ef4056', borderRadius : '20px'}}>Share My Recommendations</Button>
                    </Col>
                </Row>
                <hr className="shadowHr"/>
                <Row>
                    <Col style={{ marginTop : '30px',display: 'flex', justifyContent: 'center' }}>
                        <h1 className='profileTextStyle'><strong>This is your Profile</strong></h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', color: 'rgb(148, 148, 148)'}}>
                        <p><strong>Once you recommend an item it will appear here. Your followeres will also see it in their recommendation feed.</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', color: 'rgb(148, 148, 148)' }}>
                        <p><strong>Once you recommen. Your followeres will also see it in their recommendation feed.</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#ef4056', marginTop: '65px', display: 'flex', justifyContent: 'center', color: 'white' }}>
                        <h3 style={{ paddingTop : '50px' }}>Like this set of items on Pocket? Share with friends.</h3>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#ef4056', display: 'flex', justifyContent: 'center', color: 'white' }}>
                        <i className="fas fa-envelope iconStyleEditProfile"></i>
                        <i className="fab fa-twitter iconStyleEditProfile"></i>
                        <i className="fab fa-facebook-f iconStyleEditProfile"></i>
                        <i className="fab fa-google-plus-g iconStyleEditProfile"></i>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center', color: 'rgb(148, 148, 148)' }}>
                        <p style={{ padding : '5px'}}>&copy;2018 Read It Later, Inc</p>
                    </Col>
                </Row>
            </Grid>    
        );
    }
}