"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CTASection from "../components/CTASection";
import casestudies from "@/app/assets/casestudies.jpg";
import "../globals.css";
import Image from "next/image";
import useAPiAuth from "../components/useApiAuth";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import { FiMapPin } from "react-icons/fi";
import ReuseContact from "../components/ReuseContact";
// const joinSteps = [
//   {
//     icon: FaPaperPlane,
//     title: "Earthco",
//     description:
//       "Explore open roles that match your skills and ambitions — then send us your application.",
//   },
//   {
//     icon: FaPhoneAlt,
//     title: "IVest",
//     description:
//       "If there's a match, we'll connect through a quick call or task to understand your potential better.",
//   },
//   {
//     icon: FaUsers,
//     title: "Initio",
//     description:
//       "Join us for a conversation where we learn more about you — and you learn about life at Eazisols.",
//   },
//   {
//     icon: FaHandshake,
//     title: "MFG",
//     description:
//       "Once selected, we'll guide you through a smooth onboarding experience so you can hit the ground running.",
//   },
// ];

export default function Work() {
  const router = useRouter();
  const [cases, setcases] = useState([]);
  const { getData } = useAPiAuth();

  useEffect(() => {
    getData(
      "/api/case-studies",
      (res) => {
        console.log(" Full API Response:", res);
        console.log(" Data Array Only:", res?.data);

        const list = Array.isArray(res?.data) ? res.data : [];
        console.log(" extracted case-studies list:", list);
        setcases(list);
      },
      (error) => {
        console.error("Failed to fetch cases", error);
      }
    );
  }, []);
  return (
    <>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${casestudies.src})`,
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
            Our Work in Action
          </h1>{" "}
          <br />
          <p
            className="lead text-white mt-2"
            style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
          >
           {`See how we've helped clients transform their vision into results`}
          </p>
        </div>
      </div>

      <section className="py-5 bg-light">
        <Container className="mt-5 section-service">
          <h2 className="fw-bold text-center mb-5">Case Study</h2>

          <Row className="g-4 justify-content-center">
            {cases.map((c) => {
              const createdAt = new Date(c.created_at);
              const day = createdAt.getDate().toString().padStart(2, "0");
              const month = createdAt
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase();

              return (
                <Col key={c.id} xs={12} sm={10} md={6} lg={4}>
                  <Card className="latest-blog-card h-100 border-0 shadow-sm">
                    {/* image */}
                    <div className="position-relative">
                      <CardMedia>
                        <Image
                          src={c.thumbnail?.startsWith('http') ? c.thumbnail : `https://admin.eazisols.com/${c.thumbnail}`}
                          alt={c.title}
                          width={500}
                          height={300}
                          className="w-100 rounded-top"
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </CardMedia>

                      {/* date badge */}
                      <div className="latest-blog-date">
                        <span className="day">{day}</span>
                        <span className="month">{month}</span>
                      </div>
                    </div>

                    {/* body */}
                    <CardContent>
                      {/* <Typography
                        variant="caption"
                        className="d-flex align-items-center gap-1 text-muted mb-1"
                      >
                        <FiMapPin size={14} /> {"Location not specified"}
                      </Typography> */}

                      <Typography variant="h6" className="fw-bold mb-2">
                        {c.title}
                      </Typography>

                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          backgroundColor: "#ffffff",
                          border: "1px solid #e5e7eb",
                          width: "fit-content",
                          marginBottom: "12px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          style={{ color: "#374151", fontWeight: 500 }}
                        >
                          {c.Project || "App Development"}
                        </Typography>
                        <Link href={`/our-work/${c.id}`}>
                          <div
                            style={{
                              backgroundColor: "#f9fafb",
                              borderRadius: "50%",
                              padding: "4px",
                              border: "1px solid #e5e7eb",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <FaArrowRight 
                              sx={{ fontSize: 12, color: "#4b5563" }}
                            />
                          </div>
                        </Link>
                      </div>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="mb-4"
                      >
                        {c.description.replace(/<[^>]+>/g, "").slice(0, 100)}...
                      </Typography>

                      <Link href={`/our-work/${c.id}`}>
                        <Typography
                          variant="body2"
                          className="read-more fw-medium text-primary"
                          style={{ cursor: "pointer" }}
                        >
                          Read More
                        </Typography>
                      </Link>
                    </CardContent>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <ReuseContact />
      {/* <CTASection
        description1="Let's build something impactful together"
        description2="Quote Generator"
      /> */}
    </>
  );
}
