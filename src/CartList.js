import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class CartList extends Component {

    renderCart() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>Ürün Adı</th>
                        <th>Fiyat</th>
                        <th>Adet</th>
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

                            </tr>
                        ))

                    }

                </tbody>

            </Table>
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
