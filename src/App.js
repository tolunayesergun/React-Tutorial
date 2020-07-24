import React, { Component } from 'react'
import Navi from './Navi'
import { Container, Row, Col } from 'reactstrap';
import CategoryList from './CategoryList';
import ProductsList from './ProductsList';
import alertify from 'alertifyjs'
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound'
import CartList from './CartList'
export default class App extends Component {

  state = {

    selectedCategoryID: 0,
    cart: []
  };

  kategoriSec = (c) => {

    this.setState({ selectedCategoryID: c.id })
  };

  sepettenKaldir = (products) => {

    let _cart = this.state.cart;
    var deletedItem = _cart.find(c => c.products.id === products.id);
    if (deletedItem.quantity > 1) {
      deletedItem.quantity -= 1;
    }
    else {
      _cart.pop({ products });
    }
    this.setState({ cart: _cart });

  };

  sepeteEkle = (products) => {
    let newcart = this.state.cart;
    var addeditem = newcart.find(c => c.products.id === products.id);
    if (addeditem) {
      addeditem.quantity += 1;
    }
    else {
      newcart.push({ products: products, quantity: 1 });

    }
    this.setState({ cart: newcart });
    alertify.success(products.productName + "Sepete Eklendi");

  };

  render() {
    let categoryInfo = { title: "Kategori Listesi" }
    let productInfo = { title: "Ürünler Listesi" }
    return (
      <div>
        <Navi cart={this.state.cart} sepettenKaldir={this.sepettenKaldir} />
        <Container>



          <Row style={{ paddingTop: 50 }}>
            <Col xs="3">
              <CategoryList selectedCategoryID={this.state.selectedCategoryID} kategoriSec={this.kategoriSec} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props => (
                  <ProductsList
                    {...props}
                    selectedCategoryID={this.state.selectedCategoryID}
                    sepeteEkle={this.sepeteEkle}
                    cartLength={this.state.cartLength}
                    info={productInfo} />
                )} />

                <Route exact path="/cart" render={props => (
                  <CartList
                    {...props}
                    cart={this.state.cart}
                    sepettenKaldir={this.sepettenKaldir}
                  />
                )} />

                <Route component={NotFound} />

              </Switch>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


