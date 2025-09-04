import { Carousel, Image } from "react-bootstrap"

function CustomCarousel({ images })
{
    return(
    <>
    <Carousel>
        {images && images.map((src, idx) => (
            <Carousel.Item key={idx}>
                <Image src={src} alt={`Kép ${idx}`} className="w-100 carousel-image"/>
            </Carousel.Item>
        ))}
        {/*<Carousel.Item>
            <Image src="/images/main_carousel/Kőszeg.jpg" alt="" className="w-100 carousel-image"/>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="/images/main_carousel/IMG_6543-scaled.jpg" alt="" className="w-100 carousel-image"/>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="/images/main_carousel/koszeg2-961x768.jpg" alt="" className="w-100 carousel-image"/>
        </Carousel.Item>*/}
    </Carousel>
    </>
    )
}

export default CustomCarousel