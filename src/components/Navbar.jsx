import React, { useState } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Sidebar from "./Sidebar";

function NavbarCom() {
  const [closeNav, setCloseNav] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseNav = () => {
    setCloseNav((prev) => !prev);
  };

  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        className="pb-1 pt-1 relative"
        expand="md"
        style={{
          height: "56px",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <div className="d-flex align-items-center px-2">
          <Navbar.Brand
            href="#home"
            className="fs-3 fw-bold me-2 d-block d-lg-none"
          >
            Navbar
          </Navbar.Brand>
          <Button
            className="d-inline-block d-md-none m-0"
            size="md"
            onClick={handleShow}
          >
            <i className="ri-menu-line"></i>
          </Button>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto position-absolute"
          onClick={handleCloseNav}
          style={{ right: "10px", top: "10px", opacity: 0 }}
        />
        <Button
          className="button_open_nav d-inline-block d-md-none ms-auto"
          style={{
            backgroundColor: `${closeNav ? "#0A58CA" : "transparent"}`,
            marginRight: "10px",
          }}
        >
          {closeNav ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-more-2-fill"></i>
          )}
        </Button>
        <Navbar.Collapse id="basic-navbar-nav" className="bg-primary px-2">
          <Nav className="me-auto">
            <Nav.Link className="d-block" href="#home">
              Starter
            </Nav.Link>
            <Nav.Link className="d-block" href="#features">
              About
            </Nav.Link>
            <NavDropdown
              title="DD Menu"
              className="d-block"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Reset</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <DropdownButton
            ms={"auto"}
            style={{
              width: "50px",
              height: "40px",
              position: "relative",
            }}
            align={"end"}
            id="dropdown-basic-button"
            title={
              <Button
                style={{
                  width: "50px",
                  height: "40px",
                  top: "0%",
                  right: "5%",
                }}
                className="d-flex justify-content-center align-items-center position-absolute"
              >
                <img
                  src="https://demos.wrappixel.com/free-admin-templates/react/xtreme-react-free/main/static/media/user1.f3714f33.jpg"
                  alt="img"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Button>
            }
          >
            <p
              className="text-secondary mt-0 mb-2 px-3 fw-normal"
              style={{ fontSize: "12px" }}
            >
              Info
            </p>
            <DropdownItem href="#/action-1">My Account</DropdownItem>
            <DropdownItem href="#/action-2">Edit Profile</DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="#/action-3">My Balance</DropdownItem>
            <DropdownItem href="#/action-3">Inbox</DropdownItem>
            <DropdownItem href="#/action-3">Logout</DropdownItem>
          </DropdownButton>
        </Navbar.Collapse>
      </Navbar>
      <Sidebar show={show} handleClose={handleClose} setShow={setShow} />
    </>
  );
}

export default NavbarCom;
