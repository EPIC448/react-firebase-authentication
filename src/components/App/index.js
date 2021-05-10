import React, { Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'


import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';


import * as ROUTES from '../../constants/routes';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    render() {
        return (
        <Router>
            <div>
                <Navigation />
                <hr />
                <Router exact path={ROUTES.LANDING} component={LandingPage} />
                <Router exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Router exact path={ROUTES.SIGN_IN} component={SignInPage} />
                <Router exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                <Router exact path={ROUTES.HOME} component={HomePage} />
                <Router exact path={ROUTES.ACCOUNT} component={AccountPage} />
                <Router exact path={ROUTES.ADMIN} component={AdminPage} />

            </div>
            </Router>
        )
    }

}
export default App;