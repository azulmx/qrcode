import React from 'react';
import QRCode from 'qrcode.react';


function Dashboard(props) {
    const downloadQR = () => {
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
    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                    
                    <a onClick={downloadQR}> Download QR </a>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                    <QRCode
                        id="123456"
                        value="la vida es una tombola"
                        size={550}
                        level={"H"}
                        includeMargin={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;