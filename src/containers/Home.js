import React, { Component } from 'react';
import {
	Row,
	Col,
	Grid,
	Button,
	Image,
	ButtonGroup
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {push} from 'react-router-redux';
import { 
	IconDisplay 
} from '../components';

import {
	MyList
} from '../containers';

export default class Home extends Component {

	render() {
		return(
			<Grid>
				<Row style={{margin: 120, height: '30vh', marginRight : '0'}}>
					<Col style={{float : 'right', padding : '20px'}}>
						<IconDisplay />
					</Col>	
					<Col xs={12} sm={12} md={12} className="text-center">
						<Row>
							<Col md={4} xs={12} lg={4} sm={6}>
								<MyList />
							</Col>
						</Row>	
					</Col>
				</Row>
			</Grid>
		);
	}
}
