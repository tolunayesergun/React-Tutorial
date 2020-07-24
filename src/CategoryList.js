import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
state={
    _categories:[]
}
componentDidMount(){
    this.getCategories();
}

getCategories =() =>{
fetch("http://localhost:3000/categories").then(r=> r.json()).then(data=>this.setState({_categories:data}))
}
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
             {this.state._categories.map(c=> <ListGroupItem  active={c.id===this.props.selectedCategoryID} onClick={ () => this.props.kategoriSec(c)} key={c.id}>{c.categoryName}</ListGroupItem>)}
                  
                </ListGroup>

            </div>
        )
    }
}
