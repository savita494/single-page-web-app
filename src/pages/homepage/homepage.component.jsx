import React from 'react';
import { Switch,Route } from 'react-router';
import { connect } from 'react-redux';

import Directory from '../../components/directory/directory.component';
import { auth } from '../../firebase/firebase.utils';

import './homepage.styles.scss';

const HomePage = ({ currentUser, hidden }) => (
  <div className='homepage'>
    {currentUser ? (
                    <Directory/>

         
  
         
        ) : (
          <h1>please sign in </h1>

        )}
  </div>
);
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(HomePage);
