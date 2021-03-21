import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({name, info }) => (
  <div className='collection-preview'>
    <h1 className='title'>{name.toUpperCase()}</h1>
    <div className='preview'>
      {info
        .filter((info, idx) => idx < 4)
        .map(info => (
          <CollectionItem key={info.id} info={info} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
