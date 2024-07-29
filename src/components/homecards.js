import React from 'react';
import {Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import Repair from '../assets/repairps.jpg'
import Battery from '../assets/batteryps.jpg'
import Clock from '../assets/clockps.jpg'
function homeCards () {
    return (
        <Container className="homecards">
            <Row>
                <Col lg={4}>
                <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt=""
    src={Repair}
  />
  <CardBody>
    <CardTitle tag="h5">
      Watch Repair
    </CardTitle>
    {/* <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText> */}
    <Button>
      Learn More
    </Button>
  </CardBody>
</Card>
                </Col>
                <Col lg={4}>
                <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt=""
    src={Battery}
  />
  <CardBody>
    <CardTitle tag="h5">
      Watch Batteries
    </CardTitle>
    {/* <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText> */}
    <Button>
      Learn More
    </Button>
  </CardBody>
</Card>
                </Col>
                <Col lg={4}>
                <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt=""
    src={Clock}
  />
  <CardBody>
    <CardTitle tag="h5">
      Clock Repair
    </CardTitle>
    {/* <CardSubtitle */}
    {/* //   className="mb-2 text-muted"
    //   tag="h6"
    // >
    //   Card subtitle
    // </CardSubtitle>
    // <CardText>
    //   Some quick example text to build on the card title and make up the bulk of the card‘s content.
    // </CardText> */}
    <Button>
      Learn More
    </Button>
  </CardBody>
</Card>
                </Col>
            </Row>
        </Container>
    )
}

export default homeCards