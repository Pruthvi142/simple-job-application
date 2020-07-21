import React, { Component } from 'react';
import Form from './Form'
import axios from "axios"

class Main extends Component {
    addMessage = (form) => {
        axios.post('http://dct-application-form.herokuapp.com/users/application-form',form)
            .then((response) => {
                const form= response.data
                console.log (form)             
            })
            .catch((err) => {
                alert(err.form)
            })
    }
    
    render() {
        return (
            <div>
                <Form addMessage={this.addMessage}/>
                
            </div>
        );
    }
}

export default Main;