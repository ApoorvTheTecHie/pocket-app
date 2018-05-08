import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col
}from 'react-bootstrap';
import { IconDisplay } from '../components';
import { myList } from '../utilities/MockData';
import CardListComponent from '../components/CardListComponent';
export default class Favorites extends Component {
    constructor( props){
        super(props);
    }

    favoriteDataList = ( favoriteData ) => {   
        favoriteData = myList.filter( list => list.is_favorite);
        return favoriteData;
    }

    render(){
        console.log(this.favoriteDataList())
        return(
            <Grid>
                <Row style={{ margin: 120, height: '30vh', marginRight: '0' }}>
                    <Col style={{ float: 'right', padding: '20px' }}>
                        <IconDisplay />
                    </Col>
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <Row>
                            <Col md={4} xs={12} lg={4} sm={6}>
                                <h1>Favorites</h1>
                                <CardListComponent list ={this.favoriteDataList()} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}