import React from "react";
import ProductRows from "./ProductRows.js";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filterText = this.props.filterText;
    const isStockOnly = this.props.isStockOnly;

    const rows = [];
    this.props.products.forEach((val) => {
      if (val.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (isStockOnly && !val.stocked) {
        return;
      }

      rows.push(<ProductRows products={val} key={val.name} />);
    });
    // console.log(rows);
    return (
      <table>
        <thead>
          <tr>
            <th align="left">Nomi</th>
            <th align="left">Narxi</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
