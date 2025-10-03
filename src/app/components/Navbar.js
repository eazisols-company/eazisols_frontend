"use client";

import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import Link from "next/link";
import eazistransbg from "@/app/assets/eazistransbg.png";
import eazilogo from "@/app/assets/eazilogo.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CostCalculateModal from "./CostCalculator";
import Image from "next/image";

export default function NavigationBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <Nav className="ms-auto align-items-center gap-4">
              <Nav.Link
                as={Link}
                href="/"
                onClick={() => setExpanded(false)}
                className={pathname === "/" ? "active-link" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/about-us"
                onClick={() => setExpanded(false)}
                className={pathname === "/about-us" ? "active-link" : ""}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/services"
                onClick={() => setExpanded(false)}
                className={pathname === "/services" ? "active-link" : ""}
              >
                Services
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
                href="/careers"
                onClick={() => setExpanded(false)}
                className={pathname === "/careers" ? "active-link" : ""}
              >
                Careers
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/contact"
                onClick={() => setExpanded(false)}
                className={pathname === "/contact" ? "active-link" : ""}
              >
                Contact Us
              </Nav.Link>
              <div className="d-flex align-items-center ">
                {/* <Link href="/quote" passHref onClick={() => setExpanded(false)}> */}
                <Link href="" onClick={() => setOpenModal(true)}>
                  <Button className="quote-button">Quote Generator</Button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Keeps space below fixed navbar */}
      <div className="navbar-spacer" style={{ height: "76px" }}></div>
      <CostCalculateModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Dynamic Modal Title"
      ></CostCalculateModal>
    </>
  );
}
