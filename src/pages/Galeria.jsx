import { Button, Col, Container, Image, Modal, Row, Stack } from "react-bootstrap"
import CustomCarousel from "../components/CustomCarousel"
import { useEffect, useState } from "react"
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

function Galeria()
{
    const [show, setShow] = useState(false)
    const [index, setIndex] = useState();

    const handleClose = () => {
        setShow(false)   
    }
    const handleShow = (i) => {
        setShow(true)
        setIndex(i)
    }

    const next = () => {
        if(index + 1 > images.length - 1)
        {
            setIndex(0)
        }
        else
        {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if(index - 1 < 0)
        {
            setIndex(images.length - 1)
        }
        else
        {
            setIndex(index - 1)
        }
    }

    const imageModules = import.meta.glob("../assets/gallery/*", {eager: true, import: "default"})
    const images = Object.values(imageModules)

    useEffect(() => {
        document.title = "Galéria - Dóra Vendégház Kőszeg"
    }, [])

    return(
        <>
            <Container >
                <Row>
                    <Col className="text-center my-4">
                        <h1>Galéria</h1>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-5">
                        <CustomCarousel images={images}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        {images && images.map((src, idx) => (
                            <Image key={idx} src={src} alt={`Kép ${idx}`} onClick={() => handleShow(idx)} className="gallery-image" rounded/>                            
                        ))}
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="bg-transparent border-0 p-0">
                <Modal.Header closeButton className="border-0 p-0"/>
                <Modal.Body className="p-0">
                    <Container>
                        <Row>
                            <Col xs={1} className="d-flex align-items-center justify-content-center p-0">
                                <Button variant="light" onClick={prev}><CaretLeftFill/></Button>
                            </Col>
                            <Col xs={10} className="p-0">
                                <Image src={images[index]} alt={`Kép ${index}`} fluid/>
                            </Col>
                            <Col xs={1} className="d-flex align-items-center justify-content-center p-0">
                                <Button variant="light" onClick={next}><CaretRightFill/></Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Galeria