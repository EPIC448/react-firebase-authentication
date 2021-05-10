import React, { component } from ' react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => {
    <div>
        <h1>SignUp </h1>
        <SignUpForm />
    </div>
};

class SignUpForm extends component {
    constructor(props) {
        super(props);
    }
    onSubmit = event => {
    
    }
    
    onChange = event => {

    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>

            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}> Sign up</Link>
    </p>
)

export default SignUpPage;

export { SignUpForm, SignUpLink };