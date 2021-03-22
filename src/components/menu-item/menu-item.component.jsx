import React from 'react';
import { withRouter,Link} from 'react-router-dom';
import './menu-item.styles.scss'



const MenuItem = ({ name, imageUrl, size, history, linkUrl, match }) => (
 <div className='maindiv'>
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    
  >
    {/* <Route exact path='/history.push(`${match.url}${linkUrl}`)' component={Alex} /> */}
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
        
      }}
    />
    
  </div>
  <div className='content'>
      <h1 className='title'>{name.toUpperCase()}  </h1>
      {/* <Link  className='link' to='/info'>click here for more info</Link> */}
    </div>
  </div>
);

export default withRouter(MenuItem);
