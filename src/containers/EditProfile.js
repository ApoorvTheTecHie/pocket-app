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
                        <label style={{ float : 'right'}}> Edit </label>                        
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
                        <h1 className='profileTextStyle'><strong>This is your Profile</strong></h1>
                    </Col>
                </Row>
            </Grid>    
        );
    }
}