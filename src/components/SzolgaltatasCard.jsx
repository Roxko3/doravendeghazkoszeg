import { Card } from "react-bootstrap"

function SzolgaltatasCard({icon: Icon, text})
{

    return(
        <Card border="dark" className="text-center theme-color" style={{ width: '11rem' }}>
            <Card.Body>
                <Card.Title>{Icon && <Icon size={50} />}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SzolgaltatasCard