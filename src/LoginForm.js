import React, { Component } from 'react'
import { Form,FormGroup, Input, Col} from 'reactstrap';

export default class LoginForm extends Component {
    state = {
        userName: '',
        userPassword: ''
    }
    onChangeHandler = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    };
    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.userName + " " + this.state.userPassword)
    }
    render() {
        return (
            <div>

                <Form onSubmit={this.onSubmitHandler} style={{paddingTop:60}}>


                    <FormGroup>
                        <h3>Kullanıcı Adı</h3>
                        <Input onChange={this.onChangeHandler} type="text" name="userName" ></Input>
                    </FormGroup>
                    <FormGroup>
                        <h3>Şifre</h3>
                        <Input onChange={this.onChangeHandler} type="text" name="userPassword" ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Col xs="3">
                        <Input type="submit" value="Giriş Yap"></Input>
                        </Col>
                    </FormGroup>
                </Form>


            </div>
        )
    }
}
