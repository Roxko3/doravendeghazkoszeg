import { Container } from "react-bootstrap"

function Footer()
{
    return(
        <>
        <footer className="py-3 bg-success">
            <Container className="text-center">
                <span>NTAK regisztrációs szám: MA19008454 | © Copyright {new Date().getFullYear()} | Minden jog fenntartva | <a href="https://github.com/Roxko3" target="_blank">Github</a></span>
            </Container>
        </footer>
        </>
    )
}

export default Footer