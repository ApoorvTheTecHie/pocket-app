import React from 'react';
import {
    Grid,
    Row,
    Col,
    Well,
    Image,
    Label
} from 'react-bootstrap';

const CardComponent = () => {
    return(
        <Well>
            <Col>
                <p style={{ fontSize : '20px'}}>The secret lives of tumbler teens</p>
                <Image
                    style={{ width : '250px'}}
                    src="http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg"/>
                <Col style={{ marginTop : '10px', display : 'flex', justifyContent : 'space-around'}}>
                    <i className="fas fa-share"></i>
                    <i className="fas fa-check"></i>
                    <i className="far fa-star"></i>
                    <i className="fas fa-trash-alt"></i>
                    <i className="fas fa-tag"></i>
                </Col>    
            </Col>
        </Well>
    );
}

export default CardComponent;