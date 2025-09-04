import { Col, Container, Image, Row } from "react-bootstrap"
import CustomCarousel from "./components/CustomCarousel"
import { useEffect } from "react"


function App() {

  const imageModules = import.meta.glob("./assets/main_carousel/*", {eager: true, import: "default"})
  const images = Object.values(imageModules)

    useEffect(() => {
        document.title = "Dóra Vendégház Kőszeg"
    }, [])

  return (
    <>
    <Container fluid className="p-0">
      <Row>
        <Col>
          <CustomCarousel images={images}/>
        </Col>
      </Row>
    </Container>
    <Container className="my-5">
      <Row>
        <Col xs={12} lg={6}>
          <h1>Vendégház Kőszeg belvárosában</h1>
          <p>Kőszeg belvárosában 1767-ben épült műemlék épületben a földszinten lett kialakítva egy 50m² -es apartman, mely két egybenyíló boltíves szobából, felszerelt konyhából 
            ( kávé főző, mikró,hűtő vízforraló,elektromos tűzhely stb. ) fürdőből, kis étkezőből áll. Az apartmanunk egyszerre 4-fő számára biztosít kényelmes pihenést. 
            Januártól - decemberig várjuk kedves vendégeinket. Télen központi fűtés gondoskodik az Ön kényelméről, amit Ön szabályozhat felár nélkül. Nálunk nincsenek közös helységek, 
            nem kell alkalmazkodni másokhoz.  Az érkezést-távozást rugalmasan kezeljük, ahogy a foglalások lehetővé teszik. Autóval érkező vendégeinknek ingyenes parkolóbérletet biztosítunk.</p>
        </Col>
        <Col xs={12} lg={6}>
          <Image src="/images/3096355.jpg" fluid/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
