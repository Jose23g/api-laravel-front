import React, { Component } from "react";
import { ingresar } from "../services/control";
import "../index.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: [],
      password: [],
      error: null
    };
  }

  consumir = (usuario, contraseña) => {
    ingresar(usuario, contraseña).catch((err) => {
      this.setState({ error: err });
      console.error(err);
    });
  };

  render() {
    return (

      <div>
        <div className="contenedor-login">
          <h1 className="encabezado">Login</h1>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              this.consumir(this.state.usuario, this.state.password);
            }}
          >
            <div className="form-group-login">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                required
                value={this.state.usuario}
                onChange={(ev) => this.setState({ usuario: ev.target.value })}
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
              {this.state.error && <p>{this.state.error}</p>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
