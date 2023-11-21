import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
// import useLogout from '../common/useLogout';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
    let navigate = useNavigate()

        let User = async()=>{
            try {
                navigate('/login')
                
            } catch (error) {
                toast.error(error.response.data.message)
            }
}
  return <>
  <div className='dash'>
  <Navbar className="nav">
        <Container className='flex'>
          <Navbar.Brand className="text-white">Dashboard</Navbar.Brand>
          <Nav >
            <Button className="nav-btn" onClick={()=>add()}>Add Details</Button>
            <Button className="nav-btn" onClick={()=>User()}>Signup/Login</Button>

          </Nav>
        </Container>
      </Navbar>
      <div className='car'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className='img'
          src="185873493_l_normal_none.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='img'
          src="211221273_l_normal_none.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='img'
          src="211832915_l_normal_none.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      </div>
  </>
}

export default Home