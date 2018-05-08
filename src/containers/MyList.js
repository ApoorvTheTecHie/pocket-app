import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import CardListComponent from '../components/CardListComponent';
import { myList } from '../utilities/MockData';
export default class MyList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Grid>
                <h1>My List</h1>  
                    <CardListComponent list={myList} />
            </Grid>
        );
    }
}

