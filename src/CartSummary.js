import React, { Component } from 'react'
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
} from 'reactstrap';
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
                            <DropdownItem key={cartItem.products.id}>
                                {cartItem.products.productName}
                                <Badge style={{ marginLeft: 6 }} color="info">{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }

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
