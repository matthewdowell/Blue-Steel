import React from 'react';

const AnswerPhotos = ({ photos }) => {
  console.log('photos: ', photos)
  return (
    <div>
      {photos.map(photo => 
        <img 
          src={photo} 
          style={{
            height: '75px',
            width: '75px',
            border: '2px solid black',
            marginTop: '10px',
            marginLeft: '10px'
          }}
        >
        </img>
      )}
    </div>
  )
}

export default AnswerPhotos;
