import React, { Component } from 'react'
import Navi from './Navi'
import { Container, Row, Col } from 'reactstrap';
import CategoryList from './CategoryList';
import ProductsList from './ProductsList';

export default class App extends Component {

  state = {

    selectedCategoryID: 0
  }

  kategoriSec = (c) => {

    this.setState({ selectedCategoryID: c.id })
  }

  render() {
    let categoryInfo = { title: "Kategori Listesi" }
    let productInfo = { title: "Ürünler Listesi" }
    return (
      <div>
          <Navi/>
        <Container>

        

          <Row>
            <Col xs="3">
              <CategoryList selectedCategoryID={this.state.selectedCategoryID} kategoriSec={this.kategoriSec} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductsList selectedCategoryID={this.state.selectedCategoryID} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


