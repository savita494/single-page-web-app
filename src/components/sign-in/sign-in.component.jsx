import React from 'react';
// import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import HomePage from '../../pages/homepage/homepage.component';

import { auth, signInWithGoogle,signInWithFacebook } from '../../firebase/firebase.utils';
// import { auth, signInWithFacebook } from '../../firebase/firebase.utils';
// import {firebase} from '../../firebase/config';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

   const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

   handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton className='signInButton' type='submit'> Sign in </CustomButton>
            <br></br>

            <CustomButton   className='googleButton' onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>

            <br></br>
             <CustomButton className='facebookButton' onClick={signInWithFacebook} isFacebookSignIn>
              Sign in with Facebook
            </CustomButton> 
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
