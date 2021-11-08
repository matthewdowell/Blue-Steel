import React from "react";
import RelatedProductsList from "../related_elements/RelatedProductsList.jsx"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product_id: 44388,
    }
  }

  renderNewProductId(id) {
    this.setState({
      product_id: id,
    });
  }

  render() {
    return (
      <div>
          <RelatedProductsList
            product_id={this.state.product_id}
            renderNewProductId={this.renderNewProductId.bind(this)}
          />
          {/* <YourOutfitList product_id={this.state.product_id} /> */}
    </div>
    );
  }
}

export default App;