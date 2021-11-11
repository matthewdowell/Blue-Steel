/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PhotoModal from './PhotoModal.jsx';

const AnswerPhotos = ({ photos }) => {
  const [modalDisplayed, setModalDisplayed] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState('');

  return (
    <div style={{ display: 'flex' }}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img
            alt=""
            src={photo}
            style={{
              maxHeight: '100px',
              border: '2px solid black',
              marginTop: '10px',
              marginLeft: '10px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
            onClick={() => { setModalDisplayed(true); setCurrentPhoto(photo); }}
            onKeyPress={() => { setModalDisplayed(true); setCurrentPhoto(photo); }}
            role="button"
            tabIndex={0}
            aria-label="display larger image"
          />
          <div>
            {modalDisplayed
              && currentPhoto === photo
              && <PhotoModal photo={photo} setModalDisplayed={setModalDisplayed} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnswerPhotos;
