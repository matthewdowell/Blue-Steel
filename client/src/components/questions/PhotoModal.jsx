import React from 'react';

const PhotoModal = ({ photo, setModalDisplayed }) => {
  console.log('photo address', photo);
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(200, 200, 200, 0.8)',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '2',
    }}
    onClick={(e) => {if (e.target === e.currentTarget) {
      setModalDisplayed(false)}
    }}
    >
      <img 
        src={photo} 
        style={{
          maxHeight: '80%',
          maxWidth: '66%',
          border: '5px solid white',
          borderRadius: '5px'
        }}
      >
      </img>
    </div>
  )
}

export default PhotoModal;