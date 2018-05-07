import React from 'react';
import {
    Grid
} from 'react-bootstrap';

export default class NotFoundPage extends React.Component{
    constructor( props ){
        super( props )
        this.state = {
            name : ''
        }
    }
    render(){
        return(
            <Grid>
                <h3> NO {name} Found </h3>
            </Grid>
        )
    }
}