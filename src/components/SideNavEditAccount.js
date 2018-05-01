import React from 'react';
import {
    Grid,
    Col,
    Row
} from 'react-bootstrap';

const SideNavEditAccount = ( props ) => {
    
    return(
        <Grid>
            <Row>
                <Col md={12} xs={12} lg={12} sm={12}>
                    <Col lgOffset={6} mdOffset={6}>
                        <h3>{props.email}</h3>
                        <p>Back to My List</p>
                        <p>Logout</p>
                        <br/><br/><br/>
                        <h3>Options</h3>
                        <p>Edit Profile</p>
                        <p>Email Account</p>
                        <p>Notifications</p>
                        <p>Connected Services and Apps</p>
                        <p>Pocket for Web</p>
                        <p>Privacy</p>
                        <p>Export</p>
                    </Col>
                </Col>
            </Row>
        </Grid>
    );
}

export default SideNavEditAccount;