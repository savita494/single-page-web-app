import React from 'react';
import { version } from 'react-dom';
import { withRouter ,Link} from 'react-router-dom';
import Alex from '../../pages/alexinfo/alex';
import Shop from '../../pages/shop/shop.component';
import './menu-item.styles.scss'



const MenuItem = ({ name, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    
  >
    {/* <Route exact path='/history.push(`${match.url}${linkUrl}`)' component={Alex} /> */}
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
        
      }}
    />
    <div className='content'>
      <h1 className='title'>{name.toUpperCase()}</h1>
    </div>
  </div>
  
);

export default withRouter(MenuItem);
