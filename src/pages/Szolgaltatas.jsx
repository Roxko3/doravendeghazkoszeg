import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import SzolgaltatasCard from "../components/SzolgaltatasCard"
import { FaParking, FaSnowflake, FaTv, FaWifi } from "react-icons/fa"
import { LuBugOff, LuCookingPot } from "react-icons/lu"
import { MdBalcony, MdOutlineCrib, MdOutlineIron, MdOutlineMicrowave } from "react-icons/md"
import { TbBrandCarbon, TbFridge, TbTeapot } from "react-icons/tb"
import { GiClothesline, GiFireplace, GiTowel } from "react-icons/gi"
import { PiCoatHangerBold, PiHairDryerBold } from "react-icons/pi"
import { BsArrowsAngleExpand, BsCircleSquare, BsSafe2 } from "react-icons/bs"
import { FaPeopleRoof } from "react-icons/fa6"
import { IoCardOutline } from "react-icons/io5"

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
                <Col className="d-flex flex-wrap gap-3 justify-content-center mb-3">
                    <SzolgaltatasCard icon={FaPeopleRoof} text="A szobában összesen 4 fő fér el."/>
                    <SzolgaltatasCard icon={FaWifi} text="Ingyenes Wifi"/>
                    <SzolgaltatasCard icon={FaSnowflake} text="Légkondícionálás"/>
                    <SzolgaltatasCard icon={FaTv} text="Síkképernyős TV"/>
                    <SzolgaltatasCard icon={FaParking} text="Ingyenes parkolás"/>
                    <SzolgaltatasCard icon={IoCardOutline} text="OTP SZÉP kártyával is fizethetsz"/>
                    <SzolgaltatasCard icon={BsArrowsAngleExpand} text="50 m2"/>
                    <SzolgaltatasCard icon={LuBugOff} text="Szúnyogháló"/>
                    <SzolgaltatasCard icon={MdBalcony} text="Erkély/terasz"/>
                    <SzolgaltatasCard icon={TbFridge} text="Hűtőszekrény"/>
                    <SzolgaltatasCard icon={MdOutlineMicrowave} text="Mikrohullámú sütő"/>
                    <SzolgaltatasCard icon={MdOutlineIron} text="Vasaló"/>
                    <SzolgaltatasCard icon={TbBrandCarbon} text="Szén-monoxid érzékelő"/>
                    <SzolgaltatasCard icon={GiClothesline} text="Ruhaszárító állvány"/>
                    <SzolgaltatasCard icon={GiFireplace} text="Cserépkályha"/>
                    <SzolgaltatasCard icon={PiHairDryerBold} text="Hajszárító"/>
                    <SzolgaltatasCard icon={TbTeapot} text="Tea-/kávéfőző"/>
                    <SzolgaltatasCard icon={BsSafe2} text="Szobaszéf"/>
                    <SzolgaltatasCard icon={MdOutlineCrib} text="Babaágy betehető"/>
                    <SzolgaltatasCard icon={GiTowel} text="Törölközők"/>
                    <SzolgaltatasCard icon={PiCoatHangerBold} text="Vállfák"/>
                    <SzolgaltatasCard icon={LuCookingPot} text="Konyhaedények"/>
                    <SzolgaltatasCard icon={BsCircleSquare} text="Főzőlap"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Szolgaltatas