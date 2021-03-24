import React, { useState } from 'react';

import FRIENDSDATA from './FriendsInfo.data';


const FriendsInfo=() =>{

  const state =useState();
  const [count ,setcount]=useState(5);
  const Inc =()=>{
  setcount(count+1);
  }
  return(
    <>
    <h1>{count}</h1>
    <button onClick={Inc}>click here</button>

    </>
  )
}
 export default FriendsInfo;

// class FriendsInfo extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: FRIENDSDATA
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className='friends-page'>
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <h1>hi</h1>
//           //<CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

// export default FriendsInfo;
