import { useEffect, useState, useContext} from "react";
import ProductContext from '../..context/globalContext.js'

const RelatedElements = () => {
  const currentProduct = useContext(ProductContext);
  const [dataArr, updateDataArr] = useState([]);
  const [dataStyle, updateDataStyle] = useState([]);

  useEffect(() => {
    getRelatedData(),
    getRelatedPhotos(),
  }, currentProduct.features)

  let getRelatedData = () => {
    let uniqueArr = [];
    relatedItemsIds.map(item => {
      getSharedFeatures(item)
        .then((results) => (uniqueArr.push(results.data)))
        .then(() => (updateDataArr(uniqueArr)))
        .catch((err) => (console.log(err)));
    })
  }

  let getRelatedPhotos = () => {
    relatedItemsIds.map(item => {
      getSharedStyleFeatures(item)
        .then((results) => (updateDataStyle(dataStyle => ([...dataStyle, results.data]))))
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