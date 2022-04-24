import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Izlash..."
          value={this.props.inputText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            id="onlyInStock"
            name="onlyInStock"
            checked={this.props.isStockOnly}
            onChange={this.handleInStockChange}
          />
          <label htmlFor="onlyInStock">
            Faqat omborda mavjud bo'lgan mahsulotlar
          </label>
        </p>
      </div>
    );
  }
}

export default SearchBar;
