import React from 'react';
import {
    Grid
} from 'react-bootstrap';
import CardComponent from './CardComponent';

const CardListComponent = () => {
    return(
        <Grid>
            {Array[2].map((index) => {
                <CardComponent key={index} />
            })}        
        </Grid>
    );
}

export default CardListComponent;