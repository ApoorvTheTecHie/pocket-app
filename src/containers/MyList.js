import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import CardListComponent from '../components/CardListComponent';

export default class MyList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const myList = [
            {
                title: 'React State vs Props explained',
                image: 'https://picsum.photos/200/300/?random'
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
        return(
            <Grid>
                <h1>My List</h1>
                    <CardListComponent list={myList} />
            </Grid>
        );
    }
}

