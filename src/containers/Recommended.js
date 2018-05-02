import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import { IconDisplay } from '../components';
import CardListComponent from '../components/CardListComponent';
import CardComponent from '../components/CardComponent';

const recommendationList = [
    {
        title: 'React State vs Props explained',
        image: 'https://picsum.photos/200/300'
    }, {
        title: 'React State vs Props explained',
        image: 'https://picsum.photos/200/300'
    }, {
        title: 'React State vs Props explained',
        image: 'https://picsum.photos/200/300'
    }, {
        title: 'React State vs Props explained',
        image: 'https://picsum.photos/200/300'
    }
]

export default class Recommended extends Component{
    render(){
        
        return(
            <Grid>
                <Row style={{ margin: 120, height: '30vh', marginRight: '0' }}>
                    <Col style={{ float: 'right', padding: '20px' }}>
                        <IconDisplay />
                    </Col>
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <Row>
                            <Col style={{ marginTop : '0px'}} md={4} xs={12} lg={4} sm={6}>
                                <h3>Recommended</h3>
                                <CardListComponent
                                    list={recommendationList}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}