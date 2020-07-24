import React, { Component } from 'react'
import Navi from './Navi'
import { Container, Row, Col } from 'reactstrap';
import CategoryList from './CategoryList';
import ProductsList from './ProductsList';

export default class App extends Component {

  state = {

    selectedCategoryID: 0,
    cart:[]
  };

  kategoriSec = (c) => {

    this.setState({ selectedCategoryID: c.id })
  };

  sepeteEkle = (products) => {
  let newcart = this.state.cart;
  var addeditem=newcart.find(c=> c.products.id===products.id);
  if(addeditem)
  {
    addeditem.quantity+=1;
  }
  else
  {
    newcart.push({products:products,quantity:1});

  }
  this.setState({cart:newcart}); 

};

  render() {
    let categoryInfo = { title: "Kategori Listesi" }
    let productInfo = { title: "Ürünler Listesi" }
    return (
      <div>
          <Navi cart={this.state.cart} />
        <Container>

        

          <Row style={{paddingTop:50}}>
            <Col xs="3">
              <CategoryList selectedCategoryID={this.state.selectedCategoryID} kategoriSec={this.kategoriSec} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductsList selectedCategoryID={this.state.selectedCategoryID}  sepeteEkle={this.sepeteEkle} cartLength={this.state.cartLength} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


