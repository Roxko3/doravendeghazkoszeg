import { Col, Container, Image, Row, Stack } from "react-bootstrap"
import CustomCarousel from "./components/CustomCarousel"
import { useEffect } from "react"
import ErtekelesCard from "./components/ErtekelesCard"
import { FaStar } from "react-icons/fa"


function App() {


  const imageModules = import.meta.glob("./assets/main_carousel/*", {eager: true, import: "default"})
  const images = Object.values(imageModules)

  const ertekelesModules = import.meta.glob("./assets/ertekelesek.json", {eager: true, import: "default"})
  const ertekelesek = Object.values(ertekelesModules).flat().sort(() => Math.random() - 0.5).slice(0, 3);

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
          <p>Kőszeg belvárosában 1767-ben épült műemlék épületben a földszinten lett kialakítva egy 50 m<sup>2</sup>-es apartman, mely két egybenyíló 
            boltíves szobából, jól felszerelt konyhából / automata kávé főző, mikró, hűtő vízforraló kenyérpirító, elektromos tűzhely 
            stb / kicsi fürdőből, kis étkezőből áll. Az apartmanunk egyszerre 4 fő számára biztosít kényelmes pihenést, Januártól - decemberig 
            várjuk kedves vendégeinket, télen központi fűtés gondoskodik az Ön kényelméről (nyáron a vastag falak és egy klima biztosítja 
            kellemes hőmérsékletet ) . Az Apartmanhoz tartozik egy kis zárt udvar fedett kiülővel . Az érkezést-távozást rugalmasan kezeljük 
            ahogy a foglalások lehetővé teszik.Mivel az apartman közvetlenül a belvárosban szívében található , a parkolás fizetős lenne de mi 
            megkíméljük egy újabb kiadástól egy ingyenes parkolóbérletet biztosítunk az ittléte alatt.
            Várjuk sok szeretettel a Dóra Vendégházban Kőszegen!</p>
        </Col>
        <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center">
          <Image src="/images/3096355.jpg" alt="Kép a vendégházról" loading="lazy" fluid rounded/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} lg={3} className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <Stack direction="horizontal" gap={4}>
              <FaStar size={50} color="gold"/>
              <FaStar size={50} color="gold"/>
              <FaStar size={50} color="gold"/>
              <FaStar size={50} color="gold"/>
              <FaStar size={50} color="gold"/>
            </Stack>
            <Stack direction="horizontal" gap={3} className="mx-4 mt-4">
              <h3>9.9</h3>
              <h4>Kiváló</h4>
              <h6>199 értékelés alapján</h6>
            </Stack>
          </div>
        </Col>
        <Col xs={12} lg={9} className="d-flex flex-wrap justify-content-center gap-3">
          {ertekelesek.map((item, idx) => (          
            <ErtekelesCard key={idx} title={item.nev} text={item.szoveg} footer={item.datum}/>
          ))}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
