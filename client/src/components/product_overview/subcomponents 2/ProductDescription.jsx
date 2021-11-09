import React from 'react';


const ProductDescription = ({product}) => {



    return (
        <div style={{ borderRight: '4px solid black', background: 'none', flexBasis: '60%' }}>
            <h3>{product.slogan}</h3>
            <p>{product.description}</p>
        </div>
    )

}

export default ProductDescription;