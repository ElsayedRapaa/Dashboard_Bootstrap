import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar({ show, setShow, handleClose }) {
  const [text, setText] = useState("dashboard");

  const handleCloseSidebar = (text) => {
    setText(text);
    setShow(false);
  };

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ width: "260px" }}
        // className="d-md-none"
      >
        <Offcanvas.Header closeButton className="py-2">
          <Offcanvas.Title className="fs-3 fw-bold">Navbar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <ul className="d-flex flex-column pt-4 mx-0 ps-2">
            <li className="px-4" style={{ width: "228px", height: "56px" }}>
              <Link
                to="/"
                className={`${
                  text === "dashboard" ? "text-primary" : "text-black"
                } d-flex align-items-center justify-content-start gap-2 text-decoration-none w-100 h-100 d-block fs-6 fw-normal`}
                onClick={() => handleCloseSidebar("dashboard")}
              >
                <i className="ri-dashboard-3-line"></i> <span>Dashboard</span>
              </Link>
            </li>
            <li className="px-4" style={{ width: "228px", height: "56px" }}>
              <Link
                to="/alert"
                className={`${
                  text === "alert" ? "text-primary" : "text-black"
                } d-flex align-items-center justify-content-start gap-2 text-decoration-none w-100 h-100 d-block fs-6 fw-normal`}
                onClick={() => handleCloseSidebar("alert")}
              >
                <i className="ri-notification-line"></i> <span>Alert</span>
              </Link>
            </li>
            <li className="px-4" style={{ width: "228px", height: "56px" }}>
              <Link
                to="/badges"
                className={`${
                  text === "badges" ? "text-primary" : "text-black"
                } d-flex align-items-center justify-content-start gap-2 text-decoration-none w-100 h-100 d-block fs-6 fw-normal`}
                onClick={() => handleCloseSidebar("badges")}
              >
                <i className="ri-checkbox-circle-line"></i> <span>Badges</span>
              </Link>
            </li>
            <li className="px-4" style={{ width: "228px", height: "56px" }}>
              <Link
                to="/buttons"
                className={`${
                  text === "buttons" ? "text-primary" : "text-black"
                } d-flex align-items-center justify-content-start gap-2 text-decoration-none w-100 h-100 d-block fs-6 fw-normal`}
                onClick={() => handleCloseSidebar("buttons")}
              >
                <i className="ri-server-line"></i> <span>Buttons</span>
              </Link>
            </li>
            <li className="px-4" style={{ width: "228px", height: "56px" }}>
              <Link
                to="/cards"
                className={`${
                  text === "cards" ? "text-primary" : "text-black"
                } d-flex align-items-center justify-content-start gap-2 text-decoration-none w-100 h-100 d-block fs-6 fw-normal`}
                onClick={() => handleCloseSidebar("cards")}
              >
                <i className="ri-article-line"></i> <span>Cards</span>
              </Link>
            </li>
            <li className="px-4" style={{ width: "228px", height: "56px" }}>
              <Link
                to="/grid"
                className={`${
                  text === "grid" ? "text-primary" : "text-black"
                } d-flex align-items-center justify-content-start gap-2 text-decoration-none w-100 h-100 d-block fs-6 fw-normal`}
                onClick={() => handleCloseSidebar("grid")}
              >
                <i className="ri-layout-grid-line"></i> <span>Grid</span>
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
