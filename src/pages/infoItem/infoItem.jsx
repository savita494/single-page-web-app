import React from 'react';
import { withRouter,Link} from 'react-router-dom';
const InfoItem = ({ name, imageUrl, size, history, linkUrl, match }) => (
    <div className='maindiv'>
     <div
       className={`${size} menu-item`}
       onClick={() => history.push(`${match.url}${linkUrl}`)}
       
     >
       {/* <Route exact path='/history.push(`${match.url}${linkUrl}`)' component={Alex} /> */}
       <div
         classNamnpm stae='background-image'
         style={{
           backgroundImage: `url(${imageUrl})`
           
         }}
       />
       
     </div>
     <div className='content'>
         <h1 className='title'>{name.toUpperCase()}  </h1>
         {/* <Link  className='link' to='/info'>click here for more info</Link> */}
       </div>
       <a href="https://i.pinimg.com/736x/53/ff/05/53ff0591adc2b77ac000aca68791365a.jpg">
         <button>info</button>
       </a>
     </div>
   );
   
   export default withRouter(InfoItem);