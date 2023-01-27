import React from "react";
import ContentTop from "./ContentTop";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "./AriaChart";
import Feeds from "./Feeds";

function DashboardContent() {
  return (
    <div
      className="p-4 d-flex flex-column"
      style={{
        width: "100%",
        height: "fit-content",
        backgroundColor: "#EEF5F9",
      }}
    >
      <ContentTop />
      <Container fluid className="px-0 ps-2 pt-2 pb-4">
        <Row sx={12} sm={12} md={12} lg={2} className="">
          <Col
            sx={12}
            sm={12}
            md={8}
            className="my-3 pt-2 ps-1 pe-1 bg-white shadow-sm"
          >
            <div className="fs-4 fw-normal ps-3 ">Sales Summary</div>
            <p className="p-0 m-0 text-secondary fw-normal ps-3 pb-2">
              Yearly Sales Report
            </p>
            <Chart />
            {/* <div className=" ">
            </div> */}
          </Col>
          <Col sx={12} sm={12} md={4} className="my-3">
            <div className="bg-white shadow-sm pt-2 px-4 pb-4">
              <Feeds />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardContent;
