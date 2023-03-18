import React, { Component } from "react";
import { ingresar } from "../services/control";
import "../index.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: [],
      password: [],
      error: false,
    };
  }
 
  render() {
    return (
      <div>
        <div className="contenedor-login">
          <h1 className="encabezado">Login</h1>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
               ingresar(this.state.email, this.state.password);
            }}
          >
            <div className="form-group-login">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={(ev) => this.setState({ email: ev.target.value })}
              ></input>

              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={(ev) => this.setState({ password: ev.target.value })}
              ></input>

              <input type="submit" value="submit" className="btn-enviar" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
