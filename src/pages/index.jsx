import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const [qrType, setQRType] = useState("text");
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQRCode] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [vcardData, setVCardData] = useState({
    vname: "",
    vlastname: "",
    vemail: "",
    vphone: "",
  });
  const [email, setEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [qrStyle, setQRStyle] = useState({
    fgColor: "#000",
    bgColor: "#fff",
    size: 200,
    level: "L",
  });

  const handleTypeChange = (type) => {
    setQRType(type);
    setInputValue("");
    setWebsiteLink("");
    setEmail("");
    setEmailSubject("");
    setEmailBody("");
    setVCardData({
      vname: "",
      vlastname: "",
      vemail: "",
      vphone: "",
    });
  };

  const generateQRCode = () => {
    if (qrType === "text" && inputValue) {
      setQRCode(inputValue);
    } else if (qrType === "email" && email && emailSubject && emailBody) {
      let emailData = `mailto:${email}`;
      emailData += `?subject=${encodeURIComponent(emailSubject)}`;
      emailData += `&body=${encodeURIComponent(emailBody)}`;
      setQRCode(emailData);
    } else if (qrType === "url" && websiteLink) {
      setQRCode(websiteLink);
    } else if (qrType === "vcard") {
      const { vname, vlastname, vemail, vphone } = vcardData;
      const vcardString = `BEGIN:VCARD
VERSION:3.0
FN:${vname} ${vlastname}
EMAIL:${vemail}
TEL:${vphone}
END:VCARD`;
      setQRCode(vcardString);
    }
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    const qrCodeURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = qrCodeURL;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div className="qrPage">
      <Container className="boxStyling">
        <h1 className="topHeading">Generate QR Code</h1>
        <Row>
          <Col>
            <div className="col-1">
              <div className="btn-group ">
                <button
                  className={`btn ${qrType === "text" ? "btn-primary" : "btn-light"
                    } `}
                  onClick={() => handleTypeChange("text")}
                >
                  Text
                </button>
                <button
                  className={`btn ${qrType === "email" ? "btn-primary" : "btn-light"
                    } `}
                  onClick={() => handleTypeChange("email")}
                >
                  Email
                </button>
                <button
                  className={`btn ${qrType === "url" ? "btn-primary" : "btn-light"
                    } `}
                  onClick={() => handleTypeChange("url")}
                >
                  URL
                </button>
                <button
                  className={`btn ${qrType === "vcard" ? "btn-primary" : "btn-light"
                    } `}
                  onClick={() => handleTypeChange("vcard")}
                >
                  Vcard
                </button>
              </div>
            </div>
            {qrType === "text" ? (
              <div>
                <input
                  className="text-input"
                  type="text"
                  placeholder="Enter text for QR code"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            ) : qrType === "email" ? (
              <div>
                <div>
                  <input
                    className="text-input-email"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="text-input-email"
                    type="text"
                    value={emailSubject}
                    placeholder="Email Subject"
                    onChange={(e) => setEmailSubject(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    style={{
                      width: "100%",
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      padding: 20,
                    }}
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    type="text"
                    rows={5}
                    placeholder="Body"
                  ></textarea>
                </div>
              </div>
            ) : qrType === "url" ? (
              <div>
                <input
                  type="text"
                  className="text-input"
                  placeholder="URL"
                  value={websiteLink}
                  onChange={(e) => setWebsiteLink(e.target.value)}
                  required
                />
              </div>
            ) : qrType === "vcard" ? (
              <div>
                <div>

                  <input
                  placeholder="First Name"
                  type="text"
                    className="text-input-email"
                    id="vname"
                    value={vcardData.vname}
                    onChange={(e) =>
                      setVCardData({ ...vcardData, vname: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    placeholder="Last Name"
                    type="text"
                    className="text-input-email"
                    id="vlastname"
                    value={vcardData.vlastname}
                    onChange={(e) =>
                      setVCardData({ ...vcardData, vlastname: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="vemail"
                    placeholder="Email"
                    className="text-input-email"
                    value={vcardData.vemail}
                    onChange={(e) =>
                      setVCardData({ ...vcardData, vemail: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="vphone"
                    placeholder="Phone Number"
                    className="text-input-email"
                    value={vcardData.vphone}
                    onChange={(e) =>
                      setVCardData({ ...vcardData, vphone: e.target.value })
                    }
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            <button onClick={generateQRCode} className="btn btn-primary">
              Generate QR
            </button>
          </Col>
          <Col>
            <h2 className="qrCodeHeading">QR Code</h2>
            {qrCode && (
              <QRCode
                value={qrCode}
                size={qrStyle.size}
                fgColor={qrStyle.fgColor}
                bgColor={qrStyle.bgColor}
                level={qrStyle.level}
              />
            )}
            <br></br>
            {qrCode && (
              <button
                onClick={downloadQRCode}
                className="btn btn-primary"
              >
                Download QR Code
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
