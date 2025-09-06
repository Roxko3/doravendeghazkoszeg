import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaFacebook } from "react-icons/fa"
import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi"

function Kapcsolat()
{
    useEffect(() => {
        document.title = "Kapcsolat - Dóra Vendégház Kőszeg"
    }, [])

    return(
        <>
        <Container className="text-center">
            <Row className="my-5">
                <Col>
                    <h1>Kapcsolat</h1>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} lg={6}>
                    <h4><FiMapPin/> Cím</h4>
                    <a href="https://maps.app.goo.gl/Hhz5aUwVT73mVExc7" target="_blank">9730 Kőszeg, Várkör 67</a>
                    <br/>
                    <br/>                    
                    <h4><FiPhone/> Telefon</h4>
                    <a href="tel:+36 30 216 0846">+36 30 216 0846</a>
                    <br/>
                    <a href="tel:+36 30 396 8249">+36 30 396 8249</a> 
                    <br/>
                    <br/>
                    <h4><FiMail/> Email</h4>
                    <a href="mailto:dora.peter@freemail.hu">dora.peter@freemail.hu</a>
                    <br/>
                    <br/>
                    <h4><FiGlobe/> Web</h4>
                    <a href="http://www.doravendeghazkoszeg.hu">www.doravendeghazkoszeg.hu</a>
                    <br/>
                    <br/>
                    <h4><FaFacebook/> Facebook</h4>
                    <a href="https://www.facebook.com/koszeg.doravendeghaz/" target="_blank">Dóra Vendégház Kőszeg</a>
                </Col>
                <Col xs={12} md={8} lg={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.0271639632465!2d16.54161689215283!3d47.388052187729606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476ea28929c4aeb9%3A0xb6157c8330500a6b!2zRMOzcmEgVmVuZMOpZ2jDoXogS8WRc3plZw!5e0!3m2!1shu!2shu!4v1756816297636!5m2!1shu!2shu" style={{border: 0, width: "100%", height: "500px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Kapcsolat