import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.changeName = this.changeName.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: ''
    }
  }

  changeName(e) {
    this.setState({
      fullName: e.target.value
    })
  }

  changeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(event){
    event.preventDefault();

    const newUser = {
        full_name: this.state.fullName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
    }

    axios.post('http://localhost:5000/app/signup/', newUser)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

    //Reset states
    this.setState = ({
      fullName: '',
      username: '',
      email: '',
      password: ''
    });
  }

  render() { 
    return (
      <div>
        <div className='container'>
          <div className='form-div'>
            <form onSubmit={this.onSubmit}>
              
              <input type='text' placeholder='Full Name'
              onChange={this.changeName} value = {this.state.fullName}
              className='form-control form-group m-2'/>

              <input type='text' placeholder='Username'
              onChange={this.changeUsername} value = {this.state.username}
              className='form-control form-group m-2'/>

              <input type='text' placeholder='Email'
              onChange={this.changeEmail} value = {this.state.email}
              className='form-control form-group m-2'/>

              <input type='password' placeholder='Password'
              onChange={this.changePassword} value = {this.state.password}
              className='form-control form-group m-2'/>

              <input type="submit" className='btn btn-danger btn=block m-2' value='Submit'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
