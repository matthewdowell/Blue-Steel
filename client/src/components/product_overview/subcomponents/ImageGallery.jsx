import React from 'react';


const ImageGallery = ({ styles }) => {

    if (styles[0] !== undefined) {
        console.log(styles);
    }


    return (
        <>
            <div style={{ zIndex: '-100', border: 'none', background: 'lightgray', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexBasis: '65%' }}>
                {styles[0] ?
                    <img src={styles[0].photos[0].url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <img></img>
                }

            </div>
            <div style={{ zIndex: '100', position: 'absolute', display: 'flex', flexDirection: 'column', padding: '2em', width: '80px', height: '80px' }}>
                {styles[0] ?
                    <>
                    {
                        // change 0 to styles[i] 
                        styles[0].photos.map(photo => {
                            return <img src={photo.thumbnail_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', marginBottom: '1em' }} /> 
                        })
                    }
                    </> : <img></img>
                    
                }
            </div>
        </>
    )

}

export default ImageGallery;