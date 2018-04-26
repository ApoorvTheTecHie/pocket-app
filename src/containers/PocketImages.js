import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    DropdownButton,
    MenuItem,
    i
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IconDisplay from '../components/IconDisplay';
import CardComponent from '../components/CardComponent';

export default class PocketImages extends Component{
    render(){
        return(
            <Grid>
                <Row style={{ margin: 120, height: '30vh', marginRight: '0' }}>
                    <Col style={{ float: 'right', padding: '20px' }}>
                        <IconDisplay />
                    </Col>
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <Row>
                            <Col md={4} xs={12} lg={4} sm={6}>
                                <h1 style={{ float: 'left', margin: '0' }}>Images</h1>
                                <DropdownButton
                                    style={{ border: '0', marginLeft: '-120px', marginTop: '10px' }}
                                    bsStyle="default"
                                    title="in My Images"
                                    key={i}
                                    id={`dropdown-basic-${i}`}
                                >
                                    <MenuItem className="listSpacing" eventKey="1">
                                        <Link style={{ color: 'black' }} to="/">My List</Link>
                                    </MenuItem>
                                    <MenuItem className="listSpacing" eventKey="2">Favorites</MenuItem>
                                    <MenuItem className="listSpacing" eventKey="3">Archive</MenuItem>
                                </DropdownButton>
                            </Col>
                        </Row>
                    </Col>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <Row>
                                <Col md={4} sm={6} xs={12} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <CardComponent />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Grid>
        );
    }
}