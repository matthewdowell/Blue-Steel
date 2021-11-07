import React, { useState } from 'react';
import PhotoModal from './PhotoModal.jsx';

const AnswerPhotos = ({ photos }) => {
  
  const [modalDisplayed, setModalDisplayed] = useState(false);
  
  
  return (
    <div style={{display: 'flex'}}>
      {photos.map((photo, index) => {
        return (
          <div key={index}>
            <img 
              src={photo} 
              style={{
                height: '75px',
                width: '75px',
                border: '2px solid black',
                marginTop: '10px',
                marginLeft: '10px'
              }}
              onClick={() => { setModalDisplayed(true); }}
            >
            </img>
            <div>
              {modalDisplayed && <PhotoModal photo={photo} setModalDisplayed={setModalDisplayed}/>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AnswerPhotos;
