import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const ImageGallery = ({ styles, currentStyle, setMainImgSize, mainImgSize }) => {

    let keys = [];
    if (styles[0] !== undefined) {
        console.log(styles[currentStyle].photos.length)

    }

    const [imageIndex, setImageIndex] = useState(0)
    const [currentStyleImages, setCurrentStyleImages] = useState([])
    const [displayLeftArrow, setDisplayLeftArrow] = useState('visible')
    const [displayRightArrow, setDisplayRightArrow] = useState('visible')
    let photoBorder = ''

    useEffect(()=> {
        if (imageIndex === 0) {
            setDisplayLeftArrow('hidden')
        } else if (imageIndex === styles[currentStyle].photos.length - 1) {
            setDisplayRightArrow('hidden')
        } else {
            setDisplayLeftArrow('visible')
            setDisplayRightArrow('visible')
        }
    }, [imageIndex])

    return (
        <>
            <div onClick={(e) => {setMainImgSize(!mainImgSize)}} style={{ zIndex: '100', border: 'none', background: 'lightgray', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexBasis:'100%', cursor: mainImgSize ? 'crosshair' : 'zoom-in', width: '100%' }}>
                {styles[0] ?
                    <img src={styles[currentStyle].photos[imageIndex].url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <img></img>
                }
            </div>
            <div id={'currentStyleImagesDiv'} style={{ zIndex: '100', position: 'absolute', display: 'flex', flexDirection: 'column', padding: '2em', width: '80px', height: '630px' }}>
                {styles[0] ?
                    <>
                        {
                            // change 0 to styles[i] 
                            styles[currentStyle].photos.map((photo, index) => {
                                return <div onClick={(e) =>  {e.target.style.borderBottom = '4px solid black'; e.target.focus()}} onBlur={() => {console.log('happening')} } style={{ borderBottom: photoBorder }} >
                                    <img src={photo.thumbnail_url} key={index} id={index} onClick={(e) => { setImageIndex(e.target.id) }} alt='' style={{ border: '2px solid black', width: '70px', height: '70px', objectFit: 'cover', marginBottom: '1em' }} />
                                </div>
                            })
                        }
                    </> : <img></img>

                }
            </div>
            <div onClick={() => {if (imageIndex === 0) {setImageIndex(styles[currentStyle].photos.length - 1)} else {setImageIndex(imageIndex - 1)}}} className={'arrow left'} style={{ zIndex: '100', position: 'absolute', top: '44%', left: '10.85%', height: '15px', width: '15px', visibility: displayLeftArrow}}></div>
            <div onClick={() => {if (imageIndex === styles[currentStyle].photos.length - 1){setImageIndex(0)} else {setImageIndex(imageIndex + 1)}}} className={'arrow right'} style={{ zIndex: '100', position: 'absolute', top: '44%', right: mainImgSize ? '13%' : '40.85%', height: '15px', width: '15px', visibility: displayRightArrow}}></div>
        </>
    )

}

export default ImageGallery;