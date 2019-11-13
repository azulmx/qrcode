import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import QRCode from 'qrcode.react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          codigo: "la vida es una tombola"
        }
    }
    datos = (event) => {
        event.preventDefault();
        console.log('holaaaa');
        console.log(this.inputNode.value);
        this.setState({
            codigo: this.inputNode.value
        })
    }
    downloadQR = () => {
        const canvas = document.getElementById("123456");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "123456.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <Form onSubmit={this.downloadQR}>
                            {['radio'].map(type => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Estático" type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Dinámico" type={type} id={`inline-${type}-2`} />
                                </div>
                            ))}
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control name="elcampo" as="textarea" rows="12" onChange={this.datos} ref={node => (this.inputNode = node)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                DESCARGAR CÓDIGO QR
                            </Button>
                        </Form>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <QRCode
                            id="123456"
                            value={this.state.codigo}
                            size={550}
                            level={"H"}
                            includeMargin={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Dashboard;