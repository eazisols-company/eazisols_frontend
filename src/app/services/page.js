"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../globals.css";
import CapgeminiSERVI from "@/app/assets/CapgeminiSERVI.webp";
import javas from "@/app/assets/javas.png";
import typescript from "@/app/assets/typescript.png";
import react from "@/app/assets/react.png";
import flutter from "@/app/assets/flutter.png";
import vue from "@/app/assets/vue.png";
import node from "@/app/assets/node.png";
import aspnet from "@/app/assets/aspnet.png";
import php from "@/app/assets/php.png";
import laravel from "@/app/assets/laravel.png";
import python from "@/app/assets/python.png";
import csharp from "@/app/assets/csharp.png";
import mssql from "@/app/assets/mssql.png";
import mysql from "@/app/assets/mysql.png";
import dynamo from "@/app/assets/dynamo.png";
import ReuseContact from "../components/ReuseContact";
import Image from "next/image";

const techStack = [
  { name: "JavaScript", logo: javas },
  { name: "TypeScript", logo: typescript },
  { name: "React", logo: react },
  { name: "Flutter", logo: flutter },
  { name: "Vue.js", logo: vue },
  { name: "Node.js", logo: node },
  { name: ".Net", logo: aspnet },
  { name: "php", logo: php },
  { name: "Laravel", logo: laravel },
  { name: "Python", logo: python },
  { name: "C#", logo: csharp },
  { name: "MsSQL", logo: mssql },
  { name: "MySQL", logo: mysql },
  { name: "DynamoDB", logo: dynamo },
];
export default function Capabilities() {
  // console.log('test')
  return (
    <>
    <div
            className="py-5"
            style={{
              backgroundImage: `url(${CapgeminiSERVI.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
              overflow: "visible",
              position: "relative",
            }}
          >
            <div
            className="about-overlay-box"
              style={{
                position: "absolute",
                top: "80px",
                left: "110px",
                width: "600px",
                height: "270px", 
                background: "rgba(65, 142, 214, 0.85)",
                borderRadius: "10px",
                padding: "40px",
                display: "flex",
                flexDirection: "column", 
                justifyContent: "center",
                color: "white",
                zIndex: 2,
              }}
            >
              <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: "bold" }}>
               Our Services
              </h1>{" "}
              <br />
              <p
                className="lead text-white mt-2"
                style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
              >
                {`Join a team that's redefining digital experiences`}
              </p>
            </div>
          </div>
      
      <section className="py-5 bg-white mt-5">
        <Container
        className="paddingsection"
        >
          <h5
            className="fw-bold mb-5 ms-0"
            style={{
              fontSize: "3.7rem",
              color: "#000",
            }}
          >
            Capabilities 
          </h5>
          <Row>
            <Col md={6}>
              <div className="mb-5">
                <h5
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "1.25rem",
                    letterSpacing: "-0.2px",
                    fontWeight: "900",
                  }}
                >
                  Software Development
                </h5>
                <p className="mb-2 clickable-text">Web App Development</p><br />
                <p className="mb-2 clickable-text">Mobile App Development</p><br />
                <p className="mb-2 clickable-text">
                  Custom Software Development
                </p><br />
                <p className="mb-2 clickable-text">Product Development</p><br />
                <p className="mb-2 clickable-text">SaaS Development</p><br />
                <p className="mb-2 clickable-text">E-commerce Solutions</p><br />
                <p className="mb-0 clickable-text">Maintenance & Support</p><br />
              </div>
              <div className="mb-5">
                <h5
                  className="fw-bold mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.2px" }}
                >
                  Emerging Tech & Innovation
                </h5>
                <p className="mb-2 clickable-text">AR/VR/XR</p><br />
                <p className="mb-2 clickable-text">Metaverse Experiences</p><br />
                <p className="mb-2 clickable-text">Blockchain & Cryptography</p><br />
                <p className="mb-2 clickable-text">Web3 Solutions</p><br />
                <p className="mb-2 clickable-text">IoT Development</p><br />
                <p className="mb-0 clickable-text">Gen AI & Machine Learning</p><br />
              </div>
            </Col>

            <Col md={6}>
              <div className="mb-5">
                <h5
                  className="fw-bold mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.2px" }}
                >
                  Quality Assurance
                </h5>
                <p className="mb-2 clickable-text">
                  Software Quality Assurance
                </p><br />
                <p className="mb-0 clickable-text">Cybersecurity Solutions</p><br />
              </div>
              <div className="mb-5">
                <h5
                  className="fw-bold mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.2px" }}
                >
                  Cloud Application Development
                </h5>
                <p className="mb-2 clickable-text">CloudOps & Migration</p><br />
                <p className="mb-2 clickable-text">
                  Cloud Integration & Maintenance
                </p><br />
                <p className="mb-0 clickable-text">Automation & Apps</p>
              </div>
              <div>
                <h5
                  className="fw-bold mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.2px" }}
                >
                  UI/UX & Digital Design
                </h5>
                <p className="mb-2 clickable-text">UI/UX Design</p><br />
                <p className="mb-0 clickable-text">Web & Mobile App Design</p><br />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-white text-center">
      <Container className="paddingsection">
        <h3 className=" fw-semibold mb-1" style={{  color:'#418ED6', }}>
          Our Tech Toolkit
        </h3>
        {/* <h2 className="fw-bold mb-3">Our technology stack</h2> */}
        <p className="text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          We build with reliable and modern tools across the stack.
        </p>

        <Row className="g-4 justify-content-center">
          {techStack.map((item, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} lg={2}>
              <div
                className=" tech-card bg-white shadow-sm rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100"
                style={{
                  minHeight: "100px",
                  border: "1px solid #eee",
                  transition: "all 0.3s ease",
                }}
              >
                <Image
                  src={item.logo.src}
                  alt={item.name}
                  width={100}
                  height={40}
                  style={{ height: "40px", objectFit: "contain" }}
                  className="mb-2"
                />
                <small className="fw-medium text-muted">{item.name}</small>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    <ReuseContact />
    </>
  );
}
