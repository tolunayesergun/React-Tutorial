import React, { Component } from 'react'
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class CartSummary extends Component {

    renderSummary = () => {

        return (
            <UncontrolledDropdown inNavbar>
                <DropdownToggle className="text-muted" nav caret>
                    Sepetim ({this.props.cart.length})
            </DropdownToggle>

                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem toggle={false} key={cartItem.products.id}>
                                  <Badge style={{ marginRight: 6 }} onClick={ () => this.props.sepettenKaldir(cartItem.products)} color="danger">X</Badge>
                                {cartItem.products.productName}
                                <Badge style={{ marginLeft: 6 }} color="info">{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                   <DropdownItem>
                       <Link to="cart">Sepete Git</Link>
                   </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    renderNotSummary = () => {

        return (
            <UncontrolledDropdown inNavbar>
                <p style={{paddingRight:15,paddingTop:8,fontSize:16}} className="text-muted" nav caret>
                    Sepetim 
            </p>
            </UncontrolledDropdown>
        );
    }

    render() {

        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderNotSummary()}
            </div>
        )
    }
}
