
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Searchbar() {
    return(
        <Form className="d-flex" style={{paddingTop:'50px',paddingBottom:"50px"}}>
            <Form.Control
              type="search"
              placeholder="Email Address"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{backgroundColor:"#0176FF",color:"white"}}>Subscribe</Button>
          </Form>
    );
}
export default Searchbar;