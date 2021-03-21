import React from 'react';
import { connect } from 'react-redux';

import Directory from '../../components/directory/directory.component';

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
