import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import { IconDisplay } from '../components';

export default class Archive extends Component{
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
                                <h1>Archive</h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}