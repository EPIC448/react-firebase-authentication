import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import { withAuthentication } from '../Session'
import * as ROUTES from '../../constants/routes';



const App = () => (
     
            <Router>
                <div>
                    <Navigation />
                    <hr />
                    <Router exact path={ROUTES.LANDING} component={LandingPage} />
                    <Router  path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Router  path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Router  path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                    <Router  path={ROUTES.HOME} component={HomePage} />
                    <Router  path={ROUTES.ACCOUNT} component={AccountPage} />
                    <Router path={ROUTES.ADMIN} component={AdminPage} />

                </div>
            </Router>
        

)
export default withAuthentication(App);