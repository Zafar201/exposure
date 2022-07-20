import { Carousel,Row,Col,Container } from 'react-bootstrap'
import React, { useState } from 'react'

function TransportMode() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
         <Carousel activeIndex={index} onSelect={handleSelect} interval={3000000}>
      <Carousel.Item>
        <Container className='tr-center'>
        <div className='tr-box'>
          <Row >
            <h2>Mode of transport</h2>
          </Row> 
          <Row className='tr-box-2'>
             <Col>
             <img src="/assets/scooter.png" alt="" />
              <h1>two wheeler</h1> 
             </Col>
             <Col>
             <img src="/assets/car.png" alt="" />
             <h1>Four wheeler</h1> 
             </Col>
             <Col>
             <img src="/assets/bus.png" alt="" />
             <h1>Bus</h1> 
             </Col>
             <Col>
             <img src="/assets/train.png" alt="" />
             <h1>Train</h1> 
             </Col>
            </Row>
          </div> 
        </Container>  
      </Carousel.Item>
      <Carousel.Item>
      <Container className='tr-center'>
        <div className='tr-box'>
          <Row >
            <h2>Add Location</h2>
          </Row> 
          <Row className='tr-box-3'>
             <Col md={7}>
             
              <input type="text" placeholder='start location'/>
              <input type="text" placeholder='spot1'/>
              <input type="text" placeholder='spot2'/>
             </Col>
             <Col>
          
             {/* <h1>Four wheeler</h1>  */}
             </Col>
             <Col>
          
             {/* <h1>Bus</h1>  */}
             </Col>
          
          
            </Row>
          </div> 
        </Container> 
      </Carousel.Item>
 
    </Carousel>
    </div>
  )
}

export default TransportMode