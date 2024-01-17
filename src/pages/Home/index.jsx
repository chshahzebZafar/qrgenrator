import React from 'react'
// import MdButton from '../../components/Buttons/mdbutton'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLink, FaQrcode } from 'react-icons/fa'
import header from '../../Assets/Images/header.png'
import qr1 from '../../Assets/Images/qr1.png'
import qr2 from '../../Assets/Images/qr2.png'
import './style.css'
function Home() {
  return (
    <div className=''>
      <div className='HeaderAreaBox'>
        <Container>
          <Row>
            <Col>
              <div className='headerArea'>
                <h1>Back to Normal<span>.</span> Optimize<span>.</span> Create<span>.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto rem voluptates repudiandae alias amet voluptatibus perspiciatis nesciunt voluptate placeat enim nemo eos sunt ut, dolorem, dicta temporibus magni dolores.</p>
                <button className='btn btn-primary'><FaLink /> Explore More.</button>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <img src={header} style={{height:'500px', width:'500px'}} alt='Images Goes Her'/>
              </div>
            </Col>
          </Row>

        </Container>
      </div>

      <section >
        <div className='ToolsHeading'>
        <h1>Latest Tools<span style={{color:'orange'}}>.</span></h1>
        </div>
        <Container>
        <div className='toolsCard'>
          <div className='card'>
            <div className="card-head"><FaQrcode/></div>
            <div className='card-body'>QRCode</div>
          </div>
          <div className='card'>
            <div className="card-head"><FaQrcode/></div>
            <div className='card-body'>QRCode</div>
          </div>
          <div className='card'>
            <div className="card-head"><FaQrcode/></div>
            <div className='card-body'>QRCode</div>
          </div>
          <div className='card'>
            <div className="card-head"><FaQrcode/></div>
            <div className='card-body'>QRCode</div>
          </div>
          <div className='card'>
            <div className="card-head"><FaQrcode/></div>
            <div className='card-body'>QRCode</div>
          </div>
          <div className='card'>
            <div className="card-head"><FaQrcode/></div>
            <div className='card-body'>QRCode</div>
          </div>
          <div className='card'>
            <div className="card-head"><FaQrcode/></div>
            <div className='card-body'>QRCode</div>
          </div>
        </div>
        </Container>
        </section>
{/* Section details */}
        <section>
        <div className='ToolsHeading'>
        <h1>Know More About Tools<span style={{color:'orange'}}>.</span></h1>
        <p></p>
        </div>
        <div>
          <Container>
          <Row>
            <Col>
              <div className='ToolsDetails'>
                <h1>QR Code Generator<span>.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto rem voluptates repudiandae alias amet voluptatibus perspiciatis nesciunt voluptate placeat enim nemo eos sunt ut, dolorem, dicta temporibus magni dolores.</p>
                <button className='btn btn-primary'><FaLink /> Explore More.</button>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <img src={qr1} style={{height:'500px', width:'500px'}} alt='Images Goes Her' />
              </div>
            </Col>
          </Row>
          <Row>
            
            <Col>
              <div className="text-center">
                <img src={qr2} style={{height:'500px', width:'500px'}} alt='Images Goes Her'/>
              </div>
            </Col>
            <Col>
              <div className='ToolsDetails'>
                <h1>QR Code Generator<span>.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto rem voluptates repudiandae alias amet voluptatibus perspiciatis nesciunt voluptate placeat enim nemo eos sunt ut, dolorem, dicta temporibus magni dolores.</p>
                <button className='btn btn-primary'><FaLink /> Explore More.</button>
              </div>
            </Col>
          </Row>
          </Container>
        </div>
        </section>
    </div>
  )
}

export default Home