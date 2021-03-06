//File Name: RoutesComponent.js
//Path: src/component/common
//Description: RoutesComponent is defined here, here we have defined all routes
import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
	Home,
	Recommended,
	Favorites,
	Archive,
	Articles,
	Videos,
	PocketImages,
	EditProfile,
	EditAccount,
	NotFoundPage,
	Login,
	Signup
} from '../../containers';
import { isLoggedIn } from '../../utils';
import { Header , Footer } from '../../components'

const checkAuth = () => {
	return isLoggedIn();
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
    	<div>
    		<Header {...props}/>
      		<Component {...props}/>
      	</div>
    ) : (
      <Redirect to={{ pathname: '/'}} />
    )
  )}/>
)


const PublicRoute = ({ component: Component, ...rest }) => {

	return <Route {...rest} render={props => {

    return  (
    	<div>
    		<Header {...props} />
    		<Component {...props}/>
    		{/* <Footer {...props} /> */}
    	</div>
    )
	}}/>
}

const PublicRouteNoHeader = ({ component: Component, ...rest }) => {

	return <Route {...rest} render={props => {

		return (
			<div>
				<Component {...props} />
				{/* <Footer {...props} /> */}
			</div>
		)
	}} />
}


const RoutesComponent = () => {
	return(
		<div>
			<BrowserRouter>
				<div>
	  				<Switch>
						<PublicRoute exact path="/" component={Home} />
						<PublicRoute exact path="/favorites" component={Favorites} />
						<PublicRoute exact path="/recommended" component={Recommended} />
						<PublicRoute exact path="/archive" component={Archive} />
						<PublicRoute exact path="/articles" component={Articles} />
						<PublicRoute exact path="/videos" component={Videos} />
						<PublicRoute exact path="/images" component={PocketImages} />
						<PublicRoute exact path="/notfound" component={NotFoundPage} />
						<PublicRouteNoHeader exact path="/login" component={Login} />
						<PublicRouteNoHeader exact path="/editprofile" component={EditProfile} />
						<PublicRouteNoHeader exact path="/editaccount" component={EditAccount} />
						<PublicRouteNoHeader exact path="/signup" component={Signup} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default RoutesComponent;
