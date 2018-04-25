import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import { CardComponent } from '../components';

export default class MyList extends Component{

    render(){
        return(
            <Grid>
                <h1>My List</h1>
                <CardComponent />
            </Grid>
        );
    }
}

