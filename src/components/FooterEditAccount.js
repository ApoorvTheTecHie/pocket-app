import React from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

const FooterEditAccount = ( props ) => {
    return(
        <Grid style={{ margin : '0', padding : '0'}}>
            <Col style={{borderTop : '1px solid gray'}}>
                <Col lg={9} style={{ padding : '40px'}}>
                    <Row>
                        <Col lg={1}>
                            Blog
                        </Col>
                        <Col lg={1}>
                            About
                        </Col>
                        <Col lg={1}>
                            Explore
                        </Col>
                        <Col lg={1}>
                            Publishers
                        </Col>
                        <Col lg={1}>
                            Developers
                        </Col>
                        <Col lg={2}>
                            Terms of Service
                        </Col>
                        <Col lg={1}>
                          Privacy
                        </Col>
                        <Col lg={1}>
                            Support
                        </Col>
                        <Col lg={1}>
                            Jobs
                        </Col>
                    </Row>
                </Col>    
                <Col lg={3} style={{ padding : '40px'}}>
                    <Row>
                        <Col lg={4}>
                            Connect:
                        </Col>
                        <Col lg={2}>
                            <i className="fab fa-twitter"></i>
                        </Col>
                        <Col lg={2}>
                            <i className="fab fa-facebook-f"></i>
                        </Col>
                        <Col lg={2}>
                            <i className="fab fa-google-plus-g"></i>
                        </Col>
                    </Row>
                </Col>        
            </Col>
        </Grid>
    );
}

export default FooterEditAccount;