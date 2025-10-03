"use client";

import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import Link from "next/link";
import eazistransbg from "@/app/assets/eazistransbg.png";
import eazilogo from "@/app/assets/eazilogo.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import CostCalculateModal from "../CostCalculator";
import ContactModal from "./ContactModal";

export default function NavigationBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
    const [openContactModal, setOpenContactModal] = useState(false); 
  const [openCostModal, setOpenCostModal] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "923218881156";
  const message = "Hello! I want to connect with you.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
        style={{ height: "90px" }}
        className={`shadow-sm fixed-top custom-navbar ${
          scrolled ? "navbar-scrolled" : isHome ? "navbar-home-top" : ""
        }`}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            href="/"
            className="d-flex align-items-center"
          >
            <Image
              src={eazilogo}
              alt="eazisols Logo"
              width={120}
              height={60}
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "80px",
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2">

              <Nav.Link
                as={Link}
                href="/"
                onClick={() => setExpanded(false)}
                className={pathname === "/" ? "active-link" : ""}
              >
                Home
              </Nav.Link>
              
                <NavDropdown
                title="Home"
                id="services-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  href="/home1"
                  onClick={() => setExpanded(false)}
                >
                  Home 1
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  href="/home2"
                  onClick={() => setExpanded(false)}
                >
                  Home 2
                </NavDropdown.Item>
              </NavDropdown>


              <Nav.Link
                as={Link}
                href="/contact"
                onClick={() => setExpanded(false)}
                className={pathname === "/contact" ? "active-link" : ""}
              >
                Contact Us
              </Nav.Link>

              <NavDropdown
                title="Our Work"
                id="services-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  href="/our-work"
                  onClick={() => setExpanded(false)}
                >
                  Case Studies
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/blogs"
                  onClick={() => setExpanded(false)}
                >
                  Blog
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                href=""
                onClick={() => setOpenCostModal(true)}
                // className={pathname === "/about-us" ? "active-link" : ""}
              >
                Cost Calculator
              </Nav.Link>

               {/* <div className="d-flex align-items-center ">
                <Link href="" onClick={() => setOpenModal(true)}>
                  <Button className="quote-button">Cost Calculator</Button>
                </Link>
              </div> */}

              <Nav.Link
                as={Link}
                href="/careers"
                onClick={() => setExpanded(false)}
                className={pathname === "/careers" ? "active-link" : ""}
              >
                Careers
              </Nav.Link>

              <div className="d-flex align-items-center ms-5">
                <Link href="tel:+923218881156">
                  <Button
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#418Ed6",
                      borderRadius: "25px",
                      border: "none",
                      padding: "8px 20px",
                    }}
                  >
                    <i className="bi bi-telephone-fill me-2"></i> Call us
                  </Button>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <Link href="" onClick={() => setOpenContactModal(true)}>
                  <Button
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#000000",
                      borderRadius: "25px",
                      border: "none",
                      padding: "8px 20px",
                    }}
                  >
                    <i className="bi bi-envelope-fill me-2"></i> Drop a Message
                  </Button>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <Button
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#25D366",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    padding: 0,
                    border: "none",
                  }}
                  onClick={handleWhatsAppClick}
                >
                  <i
                    className="bi bi-whatsapp"
                    style={{ fontSize: "18px" }}
                  ></i>
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Keeps space below fixed navbar */}
      <div className="navbar-spacer" style={{ height: "76px" }}></div>
      <ContactModal
        open={openContactModal}
        onClose={() => setOpenContactModal(false)}
        title="Dynamic Modal Title"
      ></ContactModal>
      <CostCalculateModal
        open={openCostModal}
        onClose={() => setOpenCostModal(false)}
        title="Dynamic Modal Title"
      ></CostCalculateModal>
    </>
  );
}
