"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import CostCalculateModal from "./CostCalculator";
import { useState } from "react";

export default function Footer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={3} className="mb-4">
              <h5 className="mb-3">Building smart digital solutions for growing businesses.</h5>
              <div className="d-flex gap-3 mb-3">
                <Link href="https://www.facebook.com/eazisols" className="text-white" target="_blank">
                  <i className="bi bi-facebook fs-5"></i>
                </Link>
                <Link href="https://x.com/eazisols" className="text-white" target="_blank">
                  <i className="bi bi-twitter fs-5"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/eazisols/"
                  className="text-white"
                  target="_blank"
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/eazisols/"
                  className="text-white"
                  target="_blank"
                >
                  <i className="bi bi-instagram fs-5"></i>
                </Link>
              </div>
            </Col>

            <Col md={3} className="mb-4">
              <h5 className="mb-3">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/our-work">Portfolio</Link>
                </li>
                <li className="mb-2">
                  <Link href="" onClick={() => setOpenModal(true)}>
                    Quote Generator
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3} className="mb-4">
              <h5 className="mb-3">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <p
                    // href=""
                    className=" text-decoration-none"
                  >
                    Software Development
                  </p>
                </li>
                <li className="mb-2">
                  <p
                    // href="/services/development"
                    className=" text-decoration-none"
                  >
                    Cloud Application Development
                  </p>
                </li>
                <li className="mb-2">
                  <p
                    // href="/services/business"
                    className=" text-decoration-none"
                  >
                    UI UX Design
                  </p>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services"
                    className=" text-decoration-none"
                    // className="text-decoration-none border-bottom border-1 pb-1"
                    // style={{ borderColor: "#418ED6" }}
                  >
                    View All Services
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3} className="mb-2">
              <h5 className="mb-3">Contact</h5>
              <p className="mb-2">Lahore, Pakistan.</p>
              <p className="mb-2">info@eazisols.com</p>
              <div className="contact-numbers">
                <p className="mb-1">HR: +92 321 8881156</p>
                <p className="mb-1">BDM: +92 313 8484 008</p>
                <p className="mb-1">UAE: +971 54 424 4629</p>
              </div>
            </Col>
          </Row>
          {/* <hr className="my-2" /> */}
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                Copyright © {new Date().getFullYear()} eazisols
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      <CostCalculateModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Dynamic Modal Title"
      ></CostCalculateModal>
    </>
  );
}
