"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaStar,
  FaTag,
  FaCalendarAlt,
  FaUser,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    title: "MVP Dev, App Redesign & Backend Dev for AI Mobile App",
    rating: 5,
    review: "They went above and beyond to deliver my vision into reality.",
    date: "Jun 12, 2023",
    feedback:
      "eazisols successfully delivered the MVP, which was deployed in both the App Store and Google Play Store. They precisely addressed the client's needs and delivered items on time. Overall, they went above and beyond to transform the client's vision into reality and even recommended improvements.",
    project: {
      services:
        "Custom Software Development, UI/UX Design, Mobile App Development",
      budget: "$10,000 to $49,999",
      dateRange: "Mar. – June 2023",
      summary:
        "eazisols designed and developed an MVP for an AI mobile app within three weeks. The team was also tasked with redesigning the app and improving the backend operations to improve overall performance.",
    },
    reviewer: {
      name: "Shawn Winters",
      title: "Founder & CEO, Shift",
      company: "Software",
      location: "San Francisco, California",
      size: "1-10 Employees",
      verified: true,
    },
  },
  {
    title: "E-commerce Platform Build",
    rating: 5,
    review:
      "Outstanding work! They delivered before deadline and with perfect quality.",
    date: "May 5, 2023",
    feedback:
      "eazisols successfully delivered the MVP, which was deployed in both the App Store and Google Play Store. They precisely addressed the client's needs and delivered items on time. Overall, they went above and beyond to transform the client's vision into reality and even recommended improvements.",
    project: {
      services: "E-commerce Development, API Integration",
      budget: "$50,000+",
      dateRange: "Jan. – Apr. 2023",
      summary:
        "eazisols designed and developed an MVP for an AI mobile app within three weeks. The team was also tasked with redesigning the app and improving the backend operations to improve overall performance.",
    },
    reviewer: {
      name: "Emily Johnson",
      title: "CTO, FashionCo",
      company: "Retail",
      location: "New York, USA",
      size: "50-100 Employees",
      verified: true,
    },
  },
];

export default function TestimonialSection() {
  const sliderRef = useRef(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "60px 0" }}>
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <p
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#666",
              }}
            >
              Reviews
            </p>
            <h2 style={{ fontWeight: 700, fontSize: "2.5rem" }}>
              What Clients Say about us
            </h2>
          </Col>
        </Row>

        <div
          className="position-relative"
    
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Slider Arrows */}
          <IoIosArrowBack
            size={40}
            onClick={previous}
            style={{
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#333",
              zIndex: 3,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          />
          <IoIosArrowForward
            size={40}
            onClick={next}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#333",
              zIndex: 3,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          />

          <div style={{ maxWidth: "90%", width: "1100px" }}>
            <Slider ref={sliderRef} {...settings}>
              {reviews.map((item, index) => (
                <Card
                  key={index}
                  className="shadow-sm border-0 rounded-3"
                  style={{ margin: "0 10px" }}
                >
                  <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">eazisols Reviews</h5>
                    {/* <span style={{ fontSize: "0.9rem" }}>Powered by <strong>Clutch</strong></span> */}
                  </Card.Header>

                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <h5 className="mb-1">
                        {item.rating.toFixed(1)}{" "}
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} color="418ED6" />
                        ))}
                      </h5>
                      <p
                        className="mb-0 text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {reviews.length} reviews
                      </p>
                    </div>

                    <Row className="g-3">
                      {/* Project Info */}
                      <Col md={3}>
                        <h6 className="fw-bold text-uppercase mb-3">
                          The Project
                        </h6>
                        <p>
                          <FaTag className="me-2" />
                          {item.project.services}
                        </p>
                        <p>
                          <FaTag className="me-2" />
                          {item.project.budget}
                        </p>
                        <p>
                          <FaCalendarAlt className="me-2" />
                          {item.project.dateRange}
                        </p>
                        <h6 className="fw-bold text-uppercase mt-4 mb-2">
                          Project Summary
                        </h6>
                        <p className="text-muted">{item.project.summary}</p>
                      </Col>

                      {/* Ratings */}
                      <Col
                        md={2}
                        className="text-center d-flex flex-column justify-content-center"
                      >
                        <h3 className="fw-bold mb-1">
                          {item.rating.toFixed(1)}
                        </h3>
                        <div className="mb-2">
                          {[...Array(item.rating)].map((_, i) => (
                            <FaStar key={i} color="418ED6" />
                          ))}
                        </div>
                        <p className="mb-1">Quality: {item.rating}</p>
                        <p className="mb-1">Schedule: {item.rating}</p>
                        <p className="mb-1">Cost: {item.rating}</p>
                        <p className="mb-0">Willing to Refer: {item.rating}</p>
                      </Col>

                      {/* Review Content */}
                      <Col md={4}>
                        <h6 className="fw-bold text-uppercase mb-3">
                          {item.title}
                        </h6>
                        <blockquote
                          className="mb-3"
                          style={{ fontStyle: "italic" }}
                        >
                          “{item.review}”
                        </blockquote>
                        <small className="text-muted">{item.date}</small>
                        <h6 className="fw-bold text-uppercase mt-4 mb-2">
                          Feedback Summary
                        </h6>
                        <p className="text-muted">{item.feedback}</p>
                        <Button
                          variant="outline-dark"
                          className="w-100 rounded-0 mt-2"
                        >
                          Read Full Review
                        </Button>
                      </Col>

                      {/* Reviewer Info */}
                      <Col md={3}>
                        <h6 className="fw-bold text-uppercase mb-3">
                          The Reviewer
                        </h6>
                        <p>
                          <FaUser className="me-2" />
                          {item.reviewer.title}
                        </p>
                        <p>
                          <FaBuilding className="me-2" />
                          {item.reviewer.company}
                        </p>
                        <p>
                          <FaMapMarkerAlt className="me-2" />
                          {item.reviewer.location}
                        </p>
                        <p>{item.reviewer.size}</p>
                        <p>Online Review</p>
                        <p className="text-success">
                          <FaCheckCircle className="me-2" />{" "}
                          {item.reviewer.verified ? "Verified" : "Unverified"}
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
}
