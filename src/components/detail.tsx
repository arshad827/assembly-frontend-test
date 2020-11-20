import React from "react";
import { Button, Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//type
type Detailtype = {
  title: string;
  thumbnail: string;
  url: string;
  author: string;
};

type Props = {
  data: Detailtype; //data of Detail type
  closeModal(): void;
};

export class Detail extends React.Component<Props, { isOpen: boolean }> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ isOpen: false });
    this.props.closeModal();
  }

  render() {
    return (
      //**===============================template================================== */
      <Modal show={this.state.isOpen} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.data.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col>
              <Image src={this.props.data.url} fluid />
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                target="_blank"
                rel="noreferrer"
                href={this.props.data.thumbnail}
              >
                thumbnail url.
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Author: {this.props.data.author}</p>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
