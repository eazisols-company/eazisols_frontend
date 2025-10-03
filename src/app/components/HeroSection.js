"use client";

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import herobghh from "@/app/assets/herobghh.png";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../globals.css";
import td from "@/app/assets/td.png";

const HeroSection = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .slide-up {
      opacity: 0;
      animation: slideUp 1.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; 
      animation-fill-mode: both;
    }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <>
      <section
        className="d-flex flex-column bg-light position-relative hero-background"
        // className="min-vh-100 d-flex flex-column bg-light position-relative hero-background"
        style={{
          backgroundImage: `url(${td.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "520px",
          overflow: "visible",
          position: "relative",
          // marginTop: "24px",
        }}
      >
        <Container className="flex-grow-1 d-flex flex-column justify-content-center heroSection">
          <Row className="align-items-center justify-content-center gx-4">
            <Col lg={7} className="slide-up">
              <div className="pe-lg-5 ps-lg-0">
                <h1
                  className="display-3 fw-bold mb-4"
                >
                  <span className=" slide-up text-white">Transform Your </span>
                  <br />
                  <span className="text-white slide-up">Idea</span>
                  <span className="text-white slide-up" style={{
                  // color: "#418ED6",
                   textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}> Into Reality</span>
                  <p className="lead text-white slide-up mt-3" style={{fontSize: "1.2rem", fontWeight: "400", opacity: "0.9"}}>
                    eazisols helps you design, develop, and scale digital solutions 
                    <br />
                  <span className="text-white slide-up"> from idea to execution</span>
                  </p>
                </h1>

                <div className="contact-info mt-3">
                  <Row >
                    <Col md={4}>
                      <p className="text-white mb-1">
                        <FaPhone className="slide-up text-white me-2" style={{color: "#418ED6"}}/>+92 321 8881156
                      </p>
                      <p className="text-white mb-1">
                        <FaEnvelope className="slide-up text-white me-2" style={{color: "#418ED6"}}/>info@eazisols.com
                      </p>
                    </Col>
                    <Col md={4}>
                      <p className="text-white mb-1">
                        <FaWhatsapp className="slide-up text-white me-2" style={{color: "#25D366"}}/> +1 (555) 987-6543
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={5} className=" mt-4 mt-lg-0 contact-col animate-slide-in">
              <div className=" d-flex justify-content-end">
                <ContactForm
                  buttonText="Get Started"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
