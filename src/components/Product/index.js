import React, { Component } from "react";
import PageTop from "../utils/page_top";
import { connect } from "react-redux";
import ProdNfo from "./prodNfo";
import ProdImg from "./prodImg";
import { addToCart } from "../../actions/user_actions";

import {
  getProductDetail,
  claerProductDetail
} from "../../actions/products_actions";

class ProductPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.props.dispatch(getProductDetail(id)).then(response => {
      if (!this.props.products.prodDetail) {
        this.props.history.push("/");
      }
    });
  }

  componentWillUnmount() {
    this.props.dispatch(claerProductDetail());
  }

  addToCartHandler(id) {
    this.props.dispatch(addToCart(id));
  }

  render() {
    return (
      <div>
        <PageTop title="Product detail" />
        <div className="container">
          {this.props.products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">
                <div style={{ width: "500px" }}>
                  <ProdImg detail={this.props.products.prodDetail} />
                </div>
              </div>
              <div className="right">
                <ProdNfo
                  detail={this.props.products.prodDetail}
                  addToCart={id => this.addToCartHandler(id)}
                />
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductPage);
