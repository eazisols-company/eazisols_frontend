"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../globals.css";
import CTASection from "../components/CTASection";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import bloog from "@/app/assets/bloog.webp";
import useAPiAuth from "../components/useApiAuth";
import { useRouter } from "next/navigation";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { FiMapPin } from "react-icons/fi";
import ReuseContact from "../components/ReuseContact";

export default function Careers() {
  const router = useRouter();
  const [blogs, setblogs] = useState([]);
  const { getData } = useAPiAuth();

  useEffect(() => {
    getData(
      "/api/blogs",
      (res) => {
        console.log(" Full API Response:", res);
        console.log(" Data Array Only:", res?.data);

        const list = Array.isArray(res?.data) ? res.data : [];
        console.log(" extracted blog list:", list);
        setblogs(list);
      },
      (error) => {
        console.error("Failed to fetch blogs", error);
      }
    );
  });

  return (
    <>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${bloog.src})`,
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
            Our Blog
          </h1>{" "}
          <br />
          <p
            className="lead text-white mt-2"
            style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
          >
            Ideas, innovation, and insights from the eazisols team.
          </p>
        </div>
      </div>

      <section className="py-5 latest-blog">
        <Container className="section-service">
          {/* Heading */}
          <Typography
            component="h2"
            variant="h4"
            align="center"
            className="fw-bold mb-1 mt-5"
          >
            <span className="text-dark">Latest </span>
            <span className="text-secondary">Blog</span>
          </Typography>

          <Typography
            component="p"
            variant="body1"
            align="center"
            className="lead text-muted mb-5"
          >
            Elegant retreat in Coral Gables setting. This home provides
            entertaining spaces with kitchen opening
          </Typography>

          {/* Cards  */}
          <Row className="g-4 justify-content-center">
            {blogs.map((b) => {
              const createdAt = new Date(b.created_at);
              const day = createdAt.getDate().toString().padStart(2, "0");
              const month = createdAt
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase();

              return (
                <Col key={b.id} xs={12} sm={10} md={6} lg={4}>
                  <Card className="latest-blog-card h-100 border-0 shadow-sm">
                    {/* image */}
                    <div className="position-relative">
                      <CardMedia>
                        <Image
                          src={`https://admin.eazisols.com/${b.thumbnail}`}
                          alt={b.title}
                          width={500}
                          height={300}
                          className="w-100"
                          style={{ objectFit: "cover",  }}
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
                      <Typography
                        variant="caption"
                        className="d-flex align-items-center gap-1 text-muted mb-1"
                      >
                        <FiMapPin size={14} /> {"Location not specified"}
                      </Typography>

                      <Typography variant="h6" className="fw-bold mb-2">
                        {b.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="mb-4"
                      >
                        {b.description.replace(/<[^>]+>/g, "").slice(0, 100)}...
                      </Typography>

                      <Link href={`/blogs/${b.id}`}>
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

      <CTASection
        description1="Want updates from us? Let's stay in touch."
        description2="Quote Generator"
      />
    </>
  );
}
