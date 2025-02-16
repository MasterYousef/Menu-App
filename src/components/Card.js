import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
function Cards({ items }) {
  return (
    <Row>
      <Zoom>
        {items.length ? (
          items.map((e) => {
            return (
              <Col sm={12} className="mb-3">
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: " #eeeeee" }}
                >
                  <Card.Img src={e.img} variant="right" className="img-con" />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between mb-3">
                      <h3>{e.titles}</h3>
                      <p className="logo">{e.price}</p>
                    </Card.Title>
                    <Card.Text>{e.dis}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h1 className="text-center">لا توجد اصناف </h1>
        )}
      </Zoom>
    </Row>
  );
}
export default Cards;
