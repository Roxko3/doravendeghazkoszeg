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
    </Carousel>
    </>
    )
}

export default CustomCarousel