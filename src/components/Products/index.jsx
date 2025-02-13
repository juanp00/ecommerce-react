import { Container, Row, Col, Button } from "react-bootstrap"
import products from "../../database.json"

export default function Products() {
    return(
        <Container>
            <Row>
                <h2>Todos os produtos</h2>
                <p>Confira todas as nossas ofertas.</p>
            </Row>
            <Row>
                <h3>Processadores</h3>
                {products.map((product) => (
                    <Col key={product.id}>
                        <h4>{product.name}</h4>
                        <p>R$ {product.price}</p>
                        <Button  variant="light">Ver produto</Button>
                        <Button variant="light">Comprar</Button>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}