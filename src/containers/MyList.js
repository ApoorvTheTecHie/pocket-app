import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import { CardComponent } from '../components';

export default class MyList extends Component{
    constructor(props){
        super(props);
        this.state = {
            pressed : false
        }
    }

    onClickIconStar = () => {
        this.setState({ pressed : true})
        alert('Added to favorites')
    }

    onClickIconFill = () => {
        this.setState({ pressed: false })
        alert('Removed from favorites')
    }

    render(){
        const { pressed } = this.state;
        console.log(pressed);
        
        return(
            <Grid>
                <h1>My List</h1>
                <CardComponent pressed={pressed} onClickIconStar={this.onClickIconStar} onClickIconFill={this.onClickIconFill} />
            </Grid>
        );
    }
}

