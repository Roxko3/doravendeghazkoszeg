import { useState } from "react"
import { Carousel, Image, Placeholder } from "react-bootstrap"

function CustomCarousel({ images })
{
    const [loaded, setLoaded] = useState({})

    const handleLoad = (idx) => {
        setLoaded(prev => ({ ...prev, [idx]: true}))
    }

    return(
    <>
    <Carousel>
        {images && images.map((src, idx) => (
            <Carousel.Item key={idx}>
                {!loaded[idx] && (<Placeholder animation="glow"><Placeholder className="w-100 carousel-image"/></Placeholder>)}
                <Image src={src} alt={`Kép ${idx}`} onLoad={() => handleLoad(idx)} className="w-100 carousel-image" style={{ display: loaded[idx] ? "inline-block" : "none" }}/>
            </Carousel.Item>
        ))}
    </Carousel>
    </>
    )
}

export default CustomCarousel