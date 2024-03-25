import React from 'react';
import { Link, } from 'react-router-dom';
import './style.css'; // Import the CSS file
import { Badge, Container } from 'react-bootstrap';
import { FaQrcode, FaTools } from "react-icons/fa";

function Navigation() {
    return (
        <div className='navigationBar'>
            <Container>
                <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <Link to="/" className='a' >
                            <div className="nav-title"><h3 className="headerLogo">ToolsWebsite</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span />
                            <span />
                            <span />
                        </label>
                    </div>
                    <div className="nav-links">
                        <div className="dropdown">
                            <span className="dropdown-label"> <FaTools /> Tools</span>
                            <div className="dropdown-content">
                                <Link to="/Qrcode" className='a' > <FaQrcode /> QR Code <Badge>New</Badge></Link>
                                <Link to="/TextCompare" className='a' > <FaQrcode /> Text-Compare <Badge>New</Badge></Link>
                                <Link to="/Qrcode" className='a' > <FaQrcode /> Css <Badge>New</Badge></Link>
                               
                                {/* <Link to="/Contact" className='a' >Others</Link> */}
                            </div>
                        </div>
                        <Link to="/about" className='a' >About</Link>
                        <Link to="/contact" className='a' >Contact</Link>
                    </div>
                </div>
            </Container>

        </div>

    );
}

export default Navigation;
