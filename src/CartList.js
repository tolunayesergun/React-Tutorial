import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class CartList extends Component {

    renderCart() {
        return (
            <div>
            <h2  style={{paddingBottom:30}}>Sepetim </h2>

            <Table striped>
              
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>Ürün Adı</th>
                        <th>Fiyat</th>
                        <th>Adet</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem => (

                            <tr key={cartItem.products.id}>

                                <td>{cartItem.products.categoryId}</td>
                                <td>{cartItem.products.productName}</td>
                                <td>{cartItem.products.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td><Button color="warning"onClick={ () => this.props.sepettenKaldir(cartItem.products)}>Sepetten Çıkar</Button></td>

                            </tr>
                        ))

                    }

                </tbody>

            </Table>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderCart()}

            </div>
        )
    }
}
