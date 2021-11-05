import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';


const ImageGallery = ({ styles, currentStyle }) => {

    let keys = [];
    if (styles[0] !== undefined) {
        console.log(styles)
    }

    const [imageIndex, setImageIndex] = useState(0);
    const [currentStyleImages, setCurrentStyleImages] = useState([]);

    useEffect(() => {
        let imagesDiv = document.getElementById('currentStyleImagesDiv');
        // for (var i = 0; i < imagesDiv.childNodes.length; i++) {
        //     if(imagesDiv.childNodes[i].id === imageIndex) {
        //         imagesDiv.childNodes[i].style.height = '150px'
        //         console.log(imagesDiv.childNodes[i].styles)
        //     }
        // }
    }, [currentStyle])

    return (
        <>
            <div style={{ zIndex: '-100', border: 'none', background: 'lightgray', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexBasis: '65%' }}>
                {styles[0] ?
                    <img src={styles[currentStyle].photos[imageIndex].url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <img></img>
                }

            </div>
            <div id={'currentStyleImagesDiv'} style={{ zIndex: '100', position: 'absolute', display: 'flex', flexDirection: 'column', padding: '2em', width: '80px', height: '630px' }}>
                <i class="fas fa-arrow-left"></i>
                {styles[0] ?
                    <>
                        {
                            // change 0 to styles[i] 
                            styles[currentStyle].photos.map((photo, index) => {
                                return <img src={photo.thumbnail_url} key={index} id={index} onClick={(e) => { setImageIndex(e.target.id) }} alt='' style={{ border: '2px solid black', width: '70px', height: '70px', objectFit: 'cover', marginBottom: '1em' }} />
                            })
                        }
                    </> : <img></img>

                }
            </div>
        </>
    )

}

export default ImageGallery;