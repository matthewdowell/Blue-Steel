import React from 'react';
import ReviewsStars from './styleSelectorSubComponents/ReviewsStars.jsx';


const StyleSelector = () => {

    var testItems = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div style={{ background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignContent: 'center', flexBasis: '42%', padding: '25px' }}>
            <ReviewsStars/>
            <span style={{ fontSize: '1.25em' }}>CATEGORY</span>
            <span style={{ fontSize: '3em',  fontWeight: 'bold' }}>Expanded Product Name</span>
            <span style={{ fontSize: '1.25em', paddingTop: '20px' }}>$350 Price here</span>
            <div style={{ fontSize: '1.25em', paddingTop: '20px', display: 'flex' }}>
                <span style={{ fontWeight: 'bold', marginRight: '10px' }}>STYLE:</span>
                <span>SELECTED STYLE</span>
            </div>
            {/* Style Images  */}
            <div style={{ display: 'flex' }}>
                {
                testItems.map(item => {
                    return <span>{item}</span>
                })
                }
            </div>
        </div>
    )

}

export default StyleSelector;