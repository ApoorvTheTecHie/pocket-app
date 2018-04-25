import React from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const IconDisplay = () => {
    return(
        <Grid>
            <Link to="#"><i style={{ paddingRight : '10px', color : 'silver'}} className="fas fa-align-justify"></i></Link>
            <Link to="#"><i style={{ color: 'silver' }} className="fas fa-pencil-alt"></i></Link>
        </Grid>
    );
}

export default IconDisplay;