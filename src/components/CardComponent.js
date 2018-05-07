import React from 'react';
import {
    Grid,
    Row,
    Col,
    Well,
    Image,
    Label
} from 'react-bootstrap';

const CardComponent = ({
    card = {}
}) => {

    const {
        title = "",
        image = "",
    } = card;

    return(
        <Well>
            <Col>
                <p style={{ fontSize : '20px'}}>{title}</p>
                <Image
                    style={{ width : '250px'}}
                    src={image}
                />
                <Col style={{ marginTop : '10px', display : 'flex', justifyContent : 'space-around'}}>
                    <i className="fas fa-share"></i>
                    <i className="fas fa-check"></i>
                    <i className="fas fa-trash-alt"></i>
                    <i className="fas fa-tag"></i>
                </Col>    
            </Col>
        </Well>
    );
}

export default CardComponent;