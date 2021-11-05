// import React, { useState } from 'react';

// const RelatedItems = () => {
//   const [showModal, setModal] = useState(() => false);
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectProduct] = useState([]);
//   const closeModal = () => {
//     setModal(false);
//   };

//   return (
//     <div>
//       <h6 className="relatedCardsHeading">RELATED PRODUCTS</h6>
//       <div className="p-wrap">
//         <div className="p-card-container">
//           {leftCount !== 0 ? (
//             <i
//               className="left-arrow"
//               onClick={() => {
//                 decrement();
//               }}
//             />
//           ) : (
//             ''
//           )}
//           {products.slice(leftCount, rightCount).map((item, idx) => {
//             if (index < 4) {
//               return (
//                 </span>
//                   <img
//                     style={{ height: '300px', width: '250px' }}
//                     src={
//                       item.results.length !== 0 && item.results[0].photos[0].thumbnail_url !== null
//                         ? item.results[0].photos[0].thumbnail_url
//                         // eslint-disable-next-line react/no-unescaped-entities
//                         : (<h3>can't load image </h3>)
//                     }
//                     alt="Product Image"
//                     onClick={() => {
//                       handleChangeProductSelect(item);
//                       window.history.replaceState(
//                         null,
//                         '',
//                         `/products/${item.id}`,
//                       );
//                       handleChangeURL(`/products/${item.id}`);
//                     }}
//                   />
//                   <p className="p-category">{item.category}</p>
//                   <p className="p-title">{item.name}</p>
//                   <p className="p-price">{item.default_price}</p>
//                 </div>
//               );
//             }
//           })}
//           {leftCount !== rightCount - 1 ? (
//             <i
//               className="right-arrow"
//               onKey
//               onClick={() => {
//                 increment();
//               }}
//             />
//           ) : (
//             ''
//           )}


//   //   <ProductCompare
//   //     displayModal={showModal}
//   //     closeModal={closeModal}
//   //     currentProduct={currentProduct}
//   //     clickedProduct={selectedProduct}
//   // />
//   );
// };

// export default RelatedItems;