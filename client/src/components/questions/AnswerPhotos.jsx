import React, { useState } from 'react';
import PhotoModal from './PhotoModal.jsx';

const AnswerPhotos = ({ photos }) => {
  
  const [modalDisplayed, setModalDisplayed] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState('');
  
  
  return (
    <div style={{display: 'flex'}}>
      {photos.map((photo, index) => {
        return (
          <div key={index}>
            <img 
              src={photo} 
              style={{
                maxHeight: '100px',
                border: '2px solid black',
                marginTop: '10px',
                marginLeft: '10px',
                marginRight: '10px',
                cursor: 'pointer'
              }}
              onClick={() => { setModalDisplayed(true); setCurrentPhoto(photo); }}
            >
            </img>
            <div>
              {modalDisplayed 
                && currentPhoto === photo 
                && <PhotoModal photo={photo} setModalDisplayed={setModalDisplayed}/>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AnswerPhotos;
