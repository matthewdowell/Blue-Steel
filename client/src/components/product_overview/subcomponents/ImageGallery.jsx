/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import { Scale } from 'tone';

const ImageGallery = ({
  styles, currentStyle, setMainImgSize, mainImgSize,
}) => {
  if (styles[0] !== undefined) {
    // eslint-disable-next-line prefer-const
    // let thumbnailsArrLen = styles[currentStyle].photos.length;
    // console.log(thumbnailsArrLen);
  }

  const [imageIndex, setImageIndex] = useState(0);
  const [displayLeftArrow, setDisplayLeftArrow] = useState('visible');
  const [displayRightArrow, setDisplayRightArrow] = useState('visible');
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(5);
  const thumbnailsArrLen = styles?.[currentStyle]?.photos.length;

  useEffect(() => {
    if (imageIndex === 0) {
      setDisplayLeftArrow('hidden');
    } else if (imageIndex === styles[currentStyle].photos.length - 1) {
      setDisplayRightArrow('hidden');
    } else {
      setDisplayLeftArrow('visible');
      setDisplayRightArrow('visible');
    }
  }, [imageIndex]);

  return (
    <>
      <div
        role="image"
        onClick={() => { setMainImgSize(!mainImgSize); }}
        onKeyDown={() => { setMainImgSize(!mainImgSize); }}
        style={{
          transform: mainImgSize ? 'scale(2.5)' : '', zIndex: '100', border: 'none', background: 'lightgray', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexBasis: '100%', cursor: mainImgSize ? 'crosshair' : 'zoom-in', maxWidth: '100%', overflow: 'hidden',
        }}
      >
        {styles[0]
          // eslint-disable-next-line no-unused-expressions
          ? <img onMouseMove={(e) => { mainImgSize ? e.target.style.transform = `translateX(${(e.clientX * -0.55 + 500)}px) translateY(${(e.clientY * -0.55 + 260)}px)` : e.target.style.transform = 'translateX(0) translateY(0)'; }} src={styles[currentStyle].photos[imageIndex]?.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <img alt="nothing displayed" />}
      </div>
      <div
        id="currentStyleImagesDiv"
        style={{
          zIndex: '100', position: 'absolute', display: 'flex', flexDirection: 'column', padding: '2em', width: '80px', height: '630px',
        }}
      >
        {styles[0]
          ? (
            <>
              {
                styles[currentStyle].photos.map((photo, index) => (
                  <div key={index} onBlur={() => { console.log('happening'); }} style={{ }}>
                    { mainImgSize
                      ? (
                        <div style={{
                          display: 'flex', background: 'dark-gray', alignItems: 'center', justifyContent: 'center', padding: '1em',
                        }}
                        >
                          <i
                            // eslint-disable-next-line eqeqeq
                            className={(imageIndex == index) ? 'fas fa-hat-wizard' : 'far fa-image'}
                            key={index}
                            id={index}
                            onClick={(e) => { setImageIndex(e.target.id); }}
                            onKeyDown={(e) => { setImageIndex(e.target.id); }}
                          />
                        </div>
                      )
                      : (
                        <>
                          <img
                            src={photo.thumbnail_url}
                            key={index}
                            id={index}
                            onClick={(e) => { setImageIndex(e.target.id); }}
                            onKeyDown={(e) => { setImageIndex(e.target.id); }}
                            alt={photo.name}
                            style={{
                              border: '2px solid black',
                              width: '70px',
                              height: '70px',
                              objectFit: 'cover',
                              marginBottom: '1em',
                              borderTop: (imageIndex == index) ? '6px solid purple' : '2px solid black',
                              borderBottom: (imageIndex == index) ? '6px solid purple' : '2px solid black',
                              display: (index >= low && index <= high) ? 'block' : 'none',
                            }}
                          />
                        </>
                      )}
                  </div>
                ))
                }
              <div
                onClick={() => {
                  console.log(high, thumbnailsArrLen);
                  if (high === thumbnailsArrLen) {
                    setHigh(5);
                    setLow(0);
                  } else { setHigh(high + 1); setLow(low + 1); }
                }}
                onKeyDown={() => {
                  if (high === thumbnailsArrLen) {
                    setHigh(5);
                    setLow(0);
                  } else { setHigh(high + 1); setLow(low + 1); }
                }}
                className="arrow down"
                style={{
                  height: '15px',
                  width: '15px',
                  left: '3.5em',
                  bottom: '6em',
                  zIndex: '100',
                  position: 'absolute',
                }}
              />
            </>
          ) : <img alt="nothing displayed" />}
      </div>
      <div
        onClick={() => {
          if (high <= thumbnailsArrLen) {
            setImageIndex(styles[currentStyle].photos.length - 1);
          } else { setImageIndex(imageIndex - 1); }
        }}
        onKeyDown={() => {
          if (imageIndex === 0) {
            setImageIndex(styles[currentStyle].photos.length - 1);
          } else { setImageIndex(imageIndex - 1); }
        }}
        className="arrow left"
        style={{
          zIndex: '100',
          position: 'absolute',
          top: '44%',
          left: '12.5em',
          height: '15px',
          width: '15px',
          visibility: displayLeftArrow,
        }}
      />
      <div
        onClick={() => {
          if (imageIndex === styles[currentStyle].photos.length - 1) {
            setImageIndex(0);
          } else { setImageIndex(imageIndex + 1); }
        }}
        onKeyDown={() => {
          if (imageIndex === styles[currentStyle].photos.length - 1) {
            setImageIndex(0);
          } else { setImageIndex(imageIndex + 1); }
        }}
        className="arrow right"
        style={{
          zIndex: '100',
          position: 'absolute',
          top: '44%',
          right: mainImgSize ? '20em' : '47em',
          height: '15px',
          width: '15px',
          visibility: displayRightArrow,
        }}
      />
    </>
  );
};

export default ImageGallery;
