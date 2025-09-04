import { Container, Nav, Navbar } from "react-bootstrap"
import { Facebook } from "react-bootstrap-icons"
import { NavLink } from "react-router"

function Navigacio()
{
    return(
        <>
        <Navbar expand="lg" className="bg-success" sticky="top">
        <Container>       
            <Navbar.Brand as={NavLink} to="/">Dóra Vendégház Kőszeg</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/galeria">Galéria</Nav.Link>
                <Nav.Link as={NavLink} to="/kapcsolat">Kapcsolat</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link href="https://www.facebook.com/koszeg.doravendeghaz/" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default Navigacio