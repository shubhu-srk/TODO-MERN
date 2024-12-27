import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,Button
} from "react-bootstrap";
import { Link } from "react-router";

const Header = () => {
  return (
    <Navbar bg ="primary" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand >
        <Link to="/">Note Zipper</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="m-auto">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
           
          </Form>
        </Nav>

        <Nav >
          <Nav.Link >
          <Link to="/mynotes">My Notes</Link>
          </Nav.Link>
         
          <NavDropdown title="Shubham" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
