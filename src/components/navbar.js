import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header({wordFilter}) {
  const [vstate,setvstate] = useState("")
  let onesearch =()=>{
    wordFilter(vstate)
    setvstate("")
  }
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#" className='logo'>مطعم جديد</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink>sans</NavLink>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="البحث"
              className="me-2 in"
              onChange={(e)=>setvstate(e.target.value)}
              value={vstate}

            />
            <button type='button' className='btn-sans px-3 mx-3' onClick={()=>{onesearch()}}>ابحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;