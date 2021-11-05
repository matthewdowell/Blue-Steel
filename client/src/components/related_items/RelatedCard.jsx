import React, { useEffect, useSate } from 'react';
import Modal from 'react-modal';
// import header from ../../../../headerConfig.js
//import Stars

const compStyles = {
  content: {
    top: '50%',
    bottom: 'auto',
    left: '50%',
    right: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '12',
  },
};

const RelatedCard = () => {
  const [thumbnails, setThumbnails] = useSate([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [compareName, setCompareName] = useState('');
  const [compareFeats, setFeats] = useState([]);

  useEffect(() => {
    let thumbnailArray = [];
    for (let i = 0; i < dataStyles.length; i++) {
      thumbnailArray.push([Number(dataStyles[i].product_id), dataStyles[i].results[0].photos[0].thumbnail_url]);
    }
    setThumbnails(thumbnailArray);
  }, dataStyles)

  let relatedFeatArray = props.dataArr.map(({id, name, features}) => ({id, name, features}));
  let currentFeatArray = [{id: currentFeatures.id, name: currentFeatures.name, features: props.currentFeatures.features}];
  let allFeatures = currentFeatArray.concat(relatedFeatArray);

  getThumbnail = (id) => {
    for (let i = 0; i < thumbnails.length; i++) {
      if (id === thumbnails[i][0]) {
        return thumbnails[i][1];
      }
    }
  },

  modalState = (evt) => {
    let compareFeats = []
    setModalOpen(true)
    setCompareName(evt.target.name)
    for (let i = 0; i < allFeatures.length; i++) {
      if (allFeatures[i].id === Number(evt.target.value)) {
        compareFeats.push(allFeatures[i]);
      }
    }
    setFeats(compFeats);
  },

  if (dataStyles.length === 0 || currentFeatures.length === 0) {
    return null;
  },

  if (dataStyles.length !== 0 || currentFeatures.length !== 0) {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
      {dataArr.map((item, i) => (
        <div id="relatedItemCard" key={i}>
          <img onClick={() => (selectProduct(item.id))} src={getThumbnail(item.id)} />
          <button name={item.name} value={item.id} onClick={modalState}>&#9734;</button>
          <div id="cardCat">{item.category}</div>
          <div id="cardName">{item.name}</div>
          <div id="cardPrice">{item.sale_price ? item.sale_price : item.default_price}</div>
          {/* <Stars id="cardStars" avgRating={props.avgRating} /> */}
        </div>
      ))}
          <Modal
            ariaHideApp={false}
            isOpen={modalOpen}
            style={compStyles}
            onRequestClose={() => setModalOpen(false)}>
            <h3>Compare:</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>{currentFeatures.name}</th>
                  <th></th>
                  <th>{compareName}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>&#10004;</td>
                  <td>
                    {currentFeatArray[0].features.map((feature, i) => (
                      <div key={i} style={{display: 'flex', flexDirection: 'row'}}>
                          <div>{feature.value ? feature.feature : null}</div>
                          <div>{feature.value ? ':' : null}</div>
                          <div>{feature.value ? feature.value : null}</div>
                      </div>
                      ))}
                    {
                    compareFeats.length ?
                    compareFeats[0].features.map((feat, i) => (
                      <div key={i} style={{display: 'flex', flexDirection: 'row'}} >
                          <div>{feat.value ? feat.feature : null}</div>
                          <div>{feat.value ? ':' : null}</div>
                          <div>{feat.value ? feat.value : null}</div>
                      </div>
                    ))
                    : null
                    }
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <button style={{textAlign: 'center'}} onClick={() => setModalOpen(false)}>Close</button>
          </Modal>
      </div>
    )
  }
}

export default RelatedItemCard
