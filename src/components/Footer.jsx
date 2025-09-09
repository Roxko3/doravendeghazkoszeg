import { Col, Container, Image, Row } from "react-bootstrap"

function Footer()
{
    return(
        <>
        <footer className="py-3 bg-success">
            <Container className="text-center">
                <Row>
                    <Col xs={12} lg={6} className="my-2">
                        <Image src="images/tamogatas.jpg" fluid/>
                    </Col>
                    <Col xs={12} lg={6} className="my-2">
                        <Image src="images/otpszep1-1.jpg" fluid/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <span>NTAK regisztrációs szám: MA19008454 | © Copyright {new Date().getFullYear()} | Készítette: Gyarmati Levente - <a className="git-link" href="mailto:gyarmatilevi@gmail.com">gyarmatilevi@gmail.com</a></span>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}

export default Footer