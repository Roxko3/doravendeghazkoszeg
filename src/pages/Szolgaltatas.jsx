import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import SzolgaltatasCard from "../components/SzolgaltatasCard"
import { PSquare, Snow, Tv, Wifi } from "react-bootstrap-icons"

function Szolgaltatas()
{
        useEffect(() => {
            document.title = "Szolgáltatásaink - Dóra Vendégház Kőszeg"
        }, [])

    return(
        <Container>
            <Row>
                <Col className="text-center my-4">
                    <h1>Szolgáltatásaink</h1>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-wrap gap-3 justify-content-center">
                    <SzolgaltatasCard icon={Wifi} text="Ingyenes Wifi"/>
                    <SzolgaltatasCard icon={Snow} text="Légkondícionálás"/>
                    <SzolgaltatasCard icon={Tv} text="Síkképernyős TV"/>
                    <SzolgaltatasCard icon={PSquare} text="Ingyenes parkolás"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Szolgaltatas