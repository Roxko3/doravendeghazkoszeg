import { Button, Col, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router"

function NotFound()
{
    return(
        <Container className="d-flex align-items-center justify-content-center text-center mt-5">
            <Row>
                <Col>
                    <h1>404</h1>
                    <p>Az oldal nem található</p>
                    <Button variant="success" as={NavLink} to="/">Főoldal</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound