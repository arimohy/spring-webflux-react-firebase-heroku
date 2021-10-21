import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from "../utils/Auth";

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
   
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
        <h1>
            Ingresa <br /> 
            <Link className="title ml-2" to="/">
              Question And Answer
            </Link>
          </h1>
          
          <p className="lead">Ingresa tus datos para crear nueva cuenta.</p>
          <div className="form-group">
            <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
          </div>
          <div className="form-group">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <button className="btn btn-primary px-5" type="submit">Sign up</button>
          </div>
          <p>Tambien puedes crear un usuario por:</p>
          <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
            Sign up with Google
          </button>
          <hr></hr>
          <p>Ya tengo una cuenta? <Link to="/login">Login</Link></p>
        </form>
      </div>
    )
  }
}