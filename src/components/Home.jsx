import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/185873493_l_normal_none.jpg"
import bg1 from"../assets/211832915_l_normal_none.jpg"
import bg2 from "../assets/215972692_l_normal_none.jpg"
import bg3 from "../assets/Female-Wardrobe3.jpg.webp"
import bg4 from "../assets/198751349_l_normal_none.jpg"
import bg5 from "../assets/211221273_l_normal_none.jpg"
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
          src={bg2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='img'
          src={bg1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='img'
          src={bg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img'
          src={bg4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img'
          src={bg5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img'
          src={bg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      </div>
  </>
}

export default Home