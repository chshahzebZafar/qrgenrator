import React from 'react';
import { Link, } from 'react-router-dom';
import './style.css'; // Import the CSS file
import { Badge, Container } from 'react-bootstrap';
import { FaQrcode, FaTools } from "react-icons/fa";

function Navigation() {
    // Get the current location for active link styling
   
    return (
        <div className='navigationBar'>
            <Container>
                <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <div className="nav-title">CodeGenerator</div>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span />
                            <span />
                            <span />
                        </label>
                    </div>
                    <div className="nav-links">
                        <Link to="/" className='a'>Home </Link>
                        <div className="dropdown">
                            <span className="dropdown-label"> <FaTools /> Tools</span>
                            <div className="dropdown-content">
                                <Link to="/Qrcode" className='a' > <FaQrcode /> QR Code <Badge>New</Badge></Link>
                                {/* <Link to="/Contact" className='a' >Others</Link> */}
                            </div>
                        </div>
                        {/* <Link to="/about" className='a' >About</Link> */}
                        {/* <Link to="/contact" className='a' >Contact</Link> */}
                    </div>
                </div>
            </Container>

        </div>

    );
}

export default Navigation;
