import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home () {
    return(
        <Container> 
            <Row>
                <h1>Página inicial</h1>
                <p>Seja bem-vindo a nossa loja!</p>
                <Link to="/products">Produtos</Link>
                <Link to="/carrinho">Carrinho</Link>
            </Row>
        </Container>
    )
}