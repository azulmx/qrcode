import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  renderRegistro(valor) {
    console.log(valor)
    if(valor) {
      return (
        <input type="text" className="fadeIn second" name="login" placeholder="CORREO ELECTRÓNICO"/>
      )
    } else {
      return ''
    }
  }
  render() {
    let { registrarse } = this.props;
    return ( 
      <div className="App">
        <header className="App-header">
          <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                  <h1><span className="azul">QUICK RESPONSE</span><br/><span className="verde">GENERADOR DE CÓDIGOS QR</span></h1>
                  <p>Generador de código QR</p>
                </div>
                <form>
                  <input type="text" id="login" className="fadeIn second" name="login" placeholder="USUARIO"/>
                  <input type="text" id="password" className="fadeIn third" name="login" placeholder="CONTRASEÑA"/>
                  {this.renderRegistro(this.props.registro)}
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-6 col-md-6 col-lg-6">
                        <Link to="/dashboard" className="fadeIn fourth ingresar" value="INGRESAR">INGRESAR</Link>
                      </div>
                      <div className="col-xs-6 col-md-6 col-lg-6">
                        <button onClick={registrarse} className="fadeIn fourth" >REGISTRARSE</button>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
 
export default Home;