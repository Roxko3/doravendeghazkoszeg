import { Card } from "react-bootstrap"

function ErtekelesCard({title, text, footer})
{
    return(
        <Card style={{ width: '19rem' }}>
            <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Text>"{text}"</Card.Text>
                </Card.Body>
            <Card.Footer>{footer}</Card.Footer>
        </Card>
    )
}

export default ErtekelesCard