
import React from 'react';

//import './directory.styles.scss';

class Alex extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          name: 'Alex',
          imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          age:18,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
  
        },
        ]
    };
  }

  render() {
    return (
      <div className='alex_info'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (

<h1>hi hello</h1>

))}
      </div>
    );
  }
}

export default Alex;


