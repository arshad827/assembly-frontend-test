import React from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card } from "react-bootstrap";

import { Detail } from "./detail";

type Props = {
  data?: Array<any>;
};

export default class Lising extends React.Component<
  Props,
  { data: Array<any>; filter: string; isOpen: boolean; index: number }
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: this.props.data || [],
      filter: "",
      isOpen: false,
      index: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  //** filter */
  handleChange(event: any) {
    if (event.target.value.length > 0) {
      this.setState({ filter: event.target.value });
      let newData = [];
      newData = this.state.data.filter((ele) => {
        const str = ele.title.toLowerCase();
        if (str.includes(this.state.filter.toLowerCase())) {
          return ele;
        }
      });
      this.setState({ data: newData });
    } else {
      this.setState({ data: this.props.data || [] }); // because props are immutable
    }
  }

  // show modal function
  openModal = (index: number) => this.setState({ isOpen: true, index: index });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { data } = this.state;
    //**===============================template================================== */
    return (
      <Container>
        <Row>
          <Col lg={6}>
            <input
              type="text"
              className="width_as23e"
              onChange={this.handleChange}
              placeholder="Filter"
            />
          </Col>
        </Row>
        <Row>
          {data.map((img, index) => (
            <Col key={index} lg={3}>
              <Card className="mar-b">
                <Card.Img variant="top" src={img.thumbnail} />
                <Card.Body>
                  <Card.Title>{img.title}</Card.Title>                  
                  <Button
                    variant="primary"
                    onClick={() => this.openModal(index)}
                  >
                    Open detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {this.state.isOpen ? (
          <Detail
            data={this.state.data[this.state.index]}
            closeModal={this.closeModal}
          />
        ) : (
          ""
        )}
      </Container>
    );
  }
}
