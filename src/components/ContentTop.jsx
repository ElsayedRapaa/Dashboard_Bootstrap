import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContentTop() {
  return (
    <Container fluid className="w-100 px-0">
      <Row>
        <Col sm={"12"} md={"6"} lg={"6"} xl={"3"} className="my-3">
          <div className="bg-white shadow rounded px-2 pt-3 pb-0 d-flex gap-4">
            <div
              className="icon opacity-50 d-flex align-items-center justify-content-center"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#D5F3F2",
              }}
            >
              <i className="ri-folder-2-line fs-3 text-success"></i>
            </div>
            <div className="text">
              <h4 className="fs-3 fw-normal">$21k</h4>
              <p className="text-secondary" style={{ fontSize: "13px" }}>
                Yearly Earning
              </p>
            </div>
          </div>
        </Col>
        <Col sm={"12"} md={"6"} lg={"6"} xl={"3"} className="my-3">
          <div className="bg-white shadow rounded px-2 pt-3 pb-0 d-flex gap-4">
            <div
              className="icon opacity-50 d-flex align-items-center justify-content-center"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#F8DDDD",
              }}
            >
              <i className="ri-money-dollar-circle-line fs-3 text-danger"></i>
            </div>
            <div className="text">
              <h4 className="fs-3 fw-normal">$1k</h4>
              <p className="text-secondary" style={{ fontSize: "13px" }}>
                Refund given
              </p>
            </div>
          </div>
        </Col>
        <Col sm={"12"} md={"6"} lg={"6"} xl={"3"} className="my-3">
          <div className="bg-white shadow rounded px-2 pt-3 pb-0 d-flex gap-4">
            <div
              className="icon opacity-50 d-flex align-items-center justify-content-center"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#F8ECDC",
              }}
            >
              <i
                className="ri-ancient-pavilion-line fs-3"
                style={{ color: "#EE9D01" }}
              ></i>
            </div>
            <div className="text">
              <h4 className="fs-3 fw-normal">456</h4>
              <p className="text-secondary" style={{ fontSize: "13px" }}>
                Yearly Project
              </p>
            </div>
          </div>
        </Col>
        <Col sm={"12"} md={"6"} lg={"6"} xl={"3"} className="my-3">
          <div className="bg-white shadow rounded px-2 pt-3 pb-0 d-flex gap-4">
            <div
              className="icon opacity-50 d-flex align-items-center justify-content-center"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#D3EDFA",
              }}
            >
              <i
                className="ri-folder-2-line fs-3"
                style={{ color: "#3A4E59" }}
              ></i>
            </div>
            <div className="text">
              <h4 className="fs-3 fw-normal">210</h4>
              <p className="text-secondary" style={{ fontSize: "13px" }}>
                Weekly Sales
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentTop;
