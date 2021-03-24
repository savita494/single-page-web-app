import React from 'react';

import InfoItem from '../infoItem/infoItem';


class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          name: 'Alex',
          imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          id: 1,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Alex',
          
          
        },
        {
          name: 'Sehnaaz',
          imageUrl: 'https://i.pinimg.com/736x/53/ff/05/53ff0591adc2b77ac000aca68791365a.jpg',
          id: 2,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Sehnaaz'
        },
        {
          name: 'Rashmi',
          imageUrl: 'https://www.iwmbuzz.com/wp-content/uploads/2019/10/know-all-about-the-uttaran-fame-bigg-boss-13-contestant-rashami-desai-918x518.jpg',
          id: 3,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Rashmi'
        },
        {
          name: 'Parth',
          imageUrl: 'https://nettv4u.com/fileman/Uploads/Top-20-Hottest-Indian-Television-Actors/vikram_singh_chauhan.jpg',
          id: 4,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Parth'
        },
        
        {
          name: 'Arjun',
          imageUrl: 'https://static.toiimg.com/photo/64223279.cms',
          id: 5,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Arjun'
        },{
          name: 'Pearl Veer',
          imageUrl: 'https://i.pinimg.com/564x/35/33/a6/3533a69b4f3d6615003bab08e91163ee.jpg',
          id: 6,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'PearlVeer'
        }
        ,{
          name: 'Drishti',
          imageUrl: 'data:image/jpeg;base64,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',
          id: 7,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Drishti'
        },{
          name: 'Neha',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2vMDN943Vze7rI0ESpuLYhdrXFE7iS2FTQ&usqp=CAU',
          id: 8,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Neha'
        },{
          name: 'Dhruv',
          imageUrl: 'https://i.pinimg.com/originals/26/a1/e1/26a1e1df539434e8b87b0c8cdb93b6a3.jpg',
          id: 9,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Dhruv'
        },{
          name: 'Priya',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Vxm06w4orwJ-Mx_Br5tEySguvFypx9Opag&usqp=CAU',
          id: 10,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Priya'
        },{
          name: 'Shabiir Aloo Valiya',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8wCpgTr4TgJnGKnqF7ZsBnGuVMSbM-hUdQ&usqp=CAU',
          id: 11,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'ShabirAlooValiya'
        },{
          name: 'Divyanka Tripathi',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PF5og0undZ93TaHCY7K0KAMPyIe1ImGcqg&usqp=CAU',
          id: 12,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'DivyankaTripathi'
        }
        ,{
          name: 'Mohit Rana',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjajAKqqftXI9oajfQhUqimB_tP7vgmqEQA&usqp=CAU',
          id: 13,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'MohitRana'
        },{
          name: 'Drishti dhami',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KvzT9PQotlHLFjyCR6m1-mFj-Q-IQXdrhA&usqp=CAU',
          id: 14,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'DrishtiDhami'
        },{
          name: 'Naina',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROESB4tCp7ubooGT0Gqs8eby5UC4BfOaBn7w&usqp=CAU',
          id: 15,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Naina'
        },{
          name: 'Sarashwati Chandra',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnhT1GVPFnS-8Iy6sP26mFoTLaw53u9Rxpw&usqp=CAU',
          id: 16,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'SaraswatiChandra'
        },{
          name: 'Karan Kundra',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvL5hvbHacut4il1yAu5L9ubUlFmJre_J3lQ&usqp=CAU',
          id: 17,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'KaranKundra'
        },{
          name: 'Ritvik Dhanjani',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGwngNyXVb4gfFMzm_27Q4I9AYTC-gncJdw&usqp=CAU',
          id: 18,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'RitivikDhanjani'
        },{
          name: 'Izaz',
          imageUrl:'https://m.media-amazon.com/images/M/MV5BZTMwM2RkNDYtMWVhOS00ZjdiLTg4NjQtMTZiMjU0NDMwMmQ5XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY209_CR10,0,140,209_AL_.jpg',
          id: 19,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Izaz'
        },{
          name: 'Gurmeet',
          imageUrl: 'data:image/jpeg;base64,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',
          id: 20,
          CurrentCity:'delhi',
          Hometown:'delhi',
          height:'5.6',
          FavouriteMovie:'DDLJ',
          FavouriteFood:'italian',
          Qualification:'graduation',
          profession:'actor',
          linkUrl: 'Gurmeet'
        }
        
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <InfoItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Info;
