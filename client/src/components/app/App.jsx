import React from 'react';
import axios from 'axios';
import RelatedListContainer from './RelatedItems&Comparison/RelatedListContainer.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: 44388,
      productId: 44388,
      productList: [
        {
          id: 17069, campus: null, name: null, slogan: null, description: null, category: null, default_price: null, created_at: null, updated_at: null,
        },
      ],
      selectProductId: 44389,
      selectProductInfo: {
        id: 44389,
        campus: null,
        name: null,
        slogan: null,
        description: null,
        category: null,
        default_price: null,
        created_at: null,
        updated_at: null,
        features: [{ feature: null, value: null }, { feature: null, value: null }],
      },
      userOutfits: [],
      productSpecificsLoaded: false,
      reviewData: {
        product_id: '1',
        ratings: {
          1: '0',
          2: '0',
          3: '0',
          4: '0',
          5: '0',
        },
        recommended: {
          false: '0',
          true: '0',
        },
        characteristics: {},
      },
      totalReviews: 1,
    };

    this.retrieveAllProductInfo = this.retrieveAllProductInfo.bind(this);
    this.retrieveSelectProductInfo = this.retrieveSelectProductInfo.bind(this);
    this.addNewOutfit = this.addNewOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);

  componentDidMount() {
    this.retrieveAllProductInfo();
    this.retrieveSelectProductInfo();
  }

  retrieveAllProductInfo() {
    axios
      .get('/products')
      .then((response) => {
        this.setState({
          productList: response.data,
        });
      })
      .catch((error) => {
        console.log('Get total product list failed...', error);
      });
  },

  retrieveSelectProductInfo() {
    const { selectProductId } = this.state;
    axios
      .get(`/products/${selectProductId}`)
      .then((response) => {
        this.setState(() => ({
          selectProductInfo: response.data,
        }));
      })
      .then(() => {
        this.setState(
          () => ({
            productSpecificsLoaded: true,
          }),
        );
      })
      .catch((error) => {
        console.log('Get product data by id failed...', error);
      });
  }

  selectAnotherProduct(id) {
    this.setState({
      selectProductId: id,
    });
    this.retrieveSelectProductInfo();
  }

  addNewOutfit(id) {
    const { userOutfits } = this.state;
    if (!userOutfits.includes(id)) {
      userOutfits.push(id);
      this.setState({
        userOutfits,
      });
    }
  }

  deleteOutfit(id) {
    const { userOutfits } = this.state;
    const index = userOutfits.indexOf(id);
    userOutfits.splice(index, 1);
    this.setState({
      userOutfits,
    });
  }

  render() {
    const {
      productList, selectProductId, selectProductInfo, productSpecificsLoaded, userOutfits,
    } = this.state;
    if (!productSpecificsLoaded) {
      return (
        <div>LOADING</div>
      );
    }
    return (
      <div>
        <RelatedListContainer selectProductId={selectProductId} selectProductInfo={{ name: selectProductInfo.name, features: selectProductInfo.features }} selectAnotherProduct={this.selectAnotherProduct} addNewOutfit={this.addNewOutfit} deleteOutfit={this.deleteOutfit} userOutfits={userOutfits} />
      </div>
    );

export default App;
