import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ info, addItem }) => {
  const { name, age, imageUrl, CurrentCity,Hometown,height,FavouriteMovie,FavouriteFood,Qualification,profession} = info;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{age}</span>
        {/* <span className='price'>{imageUrl}</span> */}
        <span className='price'>{CurrentCity}</span>
        <span className='price'>{Hometown}</span>
        <span className='price'>{height}</span>
        <span className='price'>{FavouriteMovie}</span>
        <span className='price'>{FavouriteFood}</span>
        <span className='price'>{Qualification}</span>
        <span className='price'>{profession}</span>


      </div>
      {/* <CustomButton onClick={() => addItem(info)} inverted>
        Add to cart
      </CustomButton> */}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
