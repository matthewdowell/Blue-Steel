import React from 'react';
import ReviewsStars from './styleSelectorSubComponents/ReviewsStars.jsx';


const StyleSelector = ({product}) => {

    var testItems = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div style={{ background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignContent: 'center', flexBasis: '42%', padding: '25px' }}>
            <ReviewsStars />
            <span style={{ fontSize: '1.25em' }}>{product.category}</span>
            <span style={{ fontSize: '3em', fontWeight: 'bold' }}>{product.name}</span>
            <span style={{ fontSize: '1.25em', paddingTop: '15px' }}>${product.default_price}</span>
            <div style={{ fontSize: '1.25em', paddingTop: '20px', display: 'flex' }}>
                <span style={{ fontWeight: 'bold', marginRight: '10px' }}>STYLE:</span>
                <span>SELECTED STYLE</span>
            </div>
            {/* Style Images  */}
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '20px' }}>
                {
                    testItems.map(item => {
                        return <span style={{ fontSize: '3em', flexBasis: '21%', padding: '5px' }}>{item}</span>
                    })
                }
            </div>
            {/* Options */}
            <div>
                <select name="size" id="size" style={{ fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.25em' }}>
                    <option value="SELECT SIZE" disabled>SELECT SIZE</option>
                    <option value="">SMALL</option>
                    <option value="">MEDIUM</option>
                    <option value="">LARGE</option>
                    <option value="">X-LARGE</option>
                </select>
                <select name="quantity" id="quantity" style={{ fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.2em' }}>
                    <option value="">1</option>
                </select>
            </div>
            {/* Add To Cart and Favorite  */}
            <div>
                <select name="quantity" id="quantity" style={{ fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.2em', marginTop: '1em' }}>
                    <option value="">ADD TO BAG</option>
                </select>
                <select name="quantity" id="quantity" style={{ fontSize: '1.5em', paddingLeft: '50px', paddingRight: '70px', paddingTop: '20px', paddingBottom: '20px', marginLeft: '.2em', marginRight: '.2em', marginTop: '1em' }}>
                    <option value="">&#9734;</option>
                </select>
            </div>
        </div>
    )

}

export default StyleSelector;