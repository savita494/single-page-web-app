import React from 'react';
import { Link,Switch,Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import HomePage from '../../pages/homepage/homepage.component';

const Header = ({ currentUser, hidden }) => (
  <div>
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      
      {currentUser ? (
          
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
          
        </div>
       

       
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      
    </div>
  </div>
  
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
