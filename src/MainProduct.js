import React, { Component } from "react";
import ProductTable from "./ProductTable.js";
import SearchBar from "./SearchBar.js";

class MainProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", isStockOnly: false };
  }

  handleFilterTextChange = (inputText) => {
    this.setState({ filterText: inputText });
  };

  handleInStockChange = (isStockOnly) => {
    this.setState({ isStockOnly: isStockOnly });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        />
      </div>
    );
  }
}

export default MainProduct;
