import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QRCodeDesign from "../../components/Buttons/designQRCode";
import { FaDownload, FaFacebook, FaLink, FaMailBulk, FaPhone, FaQrcode, FaTextHeight, FaTwitter, FaWhatsapp } from "react-icons/fa";
export default function Qrcode() {
  const [qrType, setQRType] = useState("text");
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQRCode] = useState("");
  console.log(qrCode, "dflkskfdskjfs")
  const [websiteLink, setWebsiteLink] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [vcardData, setVCardData] = useState({
    vname: "",
    vlastname: "",
    vemail: "",
    vphone: "",
  });
  const [email, setEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [facebookUsername, setFacebookUsername] = useState("");
  const [whatsAppBody, setwhatsAppBody] = useState("");
  const [qrStyle, setQRStyle] = useState({
    fgColor: "#000",
    bgColor: "#fff",
    size: 300,
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
    setwhatsAppBody("");
    setFacebookUsername("");
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
    }
    else if (qrType === "vcard") {
      const { vname, vlastname, vemail, vphone } = vcardData;
      const vcardString = `BEGIN:VCARD
      VERSION:3.0
      FN:${vname} ${vlastname}
      EMAIL:${vemail}
      TEL:${vphone}
      END:VCARD`;
      setQRCode(vcardString);
    }
    else if (qrType === "whatsApp" && inputValue && whatsAppBody) {
      const whatsAppData = `https://wa.me/${encodeURIComponent(inputValue)}?text=${encodeURIComponent(whatsAppBody)}`;
      setQRCode(whatsAppData);
    }
    else if (qrType === "facebook" && facebookUsername) {
      const facebookProfileURL = `https://www.facebook.com/${encodeURIComponent(facebookUsername)}`;
      setQRCode(facebookProfileURL);
    }
    else if (qrType === "twitter" && twitterUsername) {
      const twitterProfileURL = `https://twitter.com/${encodeURIComponent(twitterUsername)}`;
      setQRCode(twitterProfileURL);
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
        {/* <h1 className="topHeading">Generate QR Code</h1> */}
        <Row>
          <Col style={{ padding: 10, }}>
            {/* <div className="buttonGroup"> */}
            <div className="buttonGroup">
              <button
                className={`btn ${qrType === "text" ? "btn-primary" : "btn-light"
                  } `}
                onClick={() => handleTypeChange("text")}
              >
                <FaTextHeight /> Text </button>
              <button
                className={`btn ${qrType === "email" ? "btn-primary" : "btn-light"
                  } `}
                onClick={() => handleTypeChange("email")}
              >
                <FaMailBulk />  Email
              </button>
              <button
                className={`btn ${qrType === "url" ? "btn-primary" : "btn-light"
                  } `}
                onClick={() => handleTypeChange("url")}
              >
                <FaLink />   URL
              </button>
              <button
                className={`btn ${qrType === "vcard" ? "btn-primary" : "btn-light"
                  } `}
                onClick={() => handleTypeChange("vcard")}
              >
                <FaPhone /> Vcard
              </button>
              <button
                title="Hello World"
                className={`btn ${qrType === "whatsApp" ? "btn-primary" : "btn-light"
                  } `}
                onClick={() => handleTypeChange("whatsApp")}
              >
                <FaWhatsapp /> WhatsApp
              </button>
              <button
                className={`btn ${qrType === "facebook" ? "btn-primary" : "btn-light"
                  } `}
                onClick={() => handleTypeChange("facebook")}
              >
                <FaFacebook /> Facebook
              </button>
              <button
                className={`btn ${qrType === "twitter" ? "btn-primary" : "btn-light"
                  } `}
                onClick={() => handleTypeChange("twitter")}
              >
                <FaTwitter /> Twitter
              </button>
            </div>
            {/* </div> */}


            {/* Lower Colums Starts */}
            <div style={{ marginTop: '30px' }}>
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
                      className="text-input"
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
                      className="text-input"
                      type="text"
                      value={emailSubject}
                      placeholder="Email Subject"
                      onChange={(e) => setEmailSubject(e.target.value)}
                    />
                  </div>
                  <div>
                    <textarea
                      className="text-area"
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
                      className="text-input"
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
                      className="text-input"
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
                      className="text-input"
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
                      className="text-input"
                      value={vcardData.vphone}
                      onChange={(e) =>
                        setVCardData({ ...vcardData, vphone: e.target.value })
                      }
                    />
                  </div>
                </div>
              )
                : qrType === 'whatsApp' ?
                  <div>
                    <input
                      className="text-input"
                      type="text"
                      placeholder="Enter WhatsApp phone number (with country code)"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <textarea
                      className="text-area"
                      value={whatsAppBody}
                      onChange={(e) => setwhatsAppBody(e.target.value)}
                      type="text"
                      rows={20}
                      placeholder="Type Welcome Mesage"
                    ></textarea>
                  </div>
                  :
                  qrType === 'facebook' ?
                    <div>
                      <input
                        className="text-input"
                        type="text"
                        placeholder="username or page name"
                        value={facebookUsername}
                        onChange={(e) => setFacebookUsername(e.target.value)}
                      />
                      {/* <textarea
                      className="text-area"
                      value={whatsAppBody}
                      onChange={(e) => setwhatsAppBody(e.target.value)}
                      type="text"
                      rows={20}
                      placeholder="Type Welcome Mesage"
                    ></textarea> */}
                    </div>
                    :
                    qrType === "twitter" ? (
                      <div>
                        <input
                          className="text-input"
                          type="text"
                          placeholder="Enter Twitter username or profile URL"
                          value={twitterUsername}
                          onChange={(e) => setTwitterUsername(e.target.value)}
                        />
                      </div>
                    )
                      :
                      ""
              }
            </div>
            <div style={{ marginTop: '50px' }}>
              <button onClick={generateQRCode} className="btn btn-primary" style={{ float: 'left' }}>
                <FaQrcode /> Generate QR</button>
            </div>
          </Col>
          <Col>
           
                <div style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {qrCode ? (
                    <>
                      <QRCode
                        style={{ border: 'solid 4px black', borderRadius: '5px', padding: '20px', boxShadow: '0px 10px 10px rgba(0,0,0,.2)' }}
                        padding={10}
                        value={qrCode}
                        size={250}
                        fgColor={qrStyle.fgColor} // Pass the selected color to fgColor
                        bgColor={'#fff'}
                        level={'L'}
                      />
                      <br />
                      <QRCodeDesign qrStyle={qrStyle} setQRStyle={setQRStyle} />
                    </>
                  ) : (
                    <p>No QR code generated</p>
                  )}
                  <br />
                  {qrCode && (
                    <button
                      style={{ alignItems: 'center' }}
                      onClick={downloadQRCode}
                      className="btn btn-primary"
                    >
                      <FaDownload /> Download QR Code
                    </button>
                  )}
                </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
