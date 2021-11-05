import { useEffect, useState, useContext} from "react";
import ProductContext from '../../context/globalContext.js';
import getRelatedProductsById from '../../utils/relatedUtils.js';

const RelatedElements = (props) => {
  const currentProduct = useContext(ProductContext);
  const [dataArr, setDataArr] = useState([]);
  const [dataStyle, setDataStyle] = useState([]);

  useEffect(() => {
    getRelatedData(),
    getRelatedPhotos(),
  }, currentProduct.features)

  let getRelatedData = () => {
    let uniqueArr = [];
    getRelatedProductsById.map(item => {
      getSharedFeatures(item)
        .then((results) => (uniqueArr.push(results.data)))
        .then(() => (setDataArr(uniqueArr)))
        .catch((err) => (console.log(err)));
    })
  }

  let getRelatedPhotos = () => {
    getRelatedProductsById.map(item => {
      getSharedStyleFeatures(item)
        .then((results) => (setDataStyle(dataStyle => ([...dataStyle, results.data]))))
        .catch((err) => (console.log(err)));
    })
  }

  return (
    <div>
      <RelatedItemCard
        dataStyle={dataStyle}
        dataArr={dataArr}
        currentProduct={currentProduct}
        currentProductFeatures={currentProductFeatures}
        relatedItemsIds={relatedItemsIds}
        avgsRating={avgsRating}
        selectProduct={selectProduct}
      />
    </div>
  )
 };

 export default RelatedElements;