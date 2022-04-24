import React from "react";

class ProductRows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.products;
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRows;
