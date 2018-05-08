import React from 'react';
import {
    Grid
} from 'react-bootstrap';
import CardComponent from './CardComponent';

const CardListComponent = ({list} ) => {
    return(
        <Grid>  
            {list.map((card, index) => {
                return <CardComponent key={index} card={card} />
            })}        
        </Grid>
    );
}

export default CardListComponent;