"use client";

import Image from "next/image";
import webbg from "@/app/assets/webbg.png";
import hh from "@/app/assets/hh.png";
import image from "@/app/assets/image.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function NewHero() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
      });
    })();
  }, []);

  return (
    <>
        <section
              className="d-flex flex-column bg-light position-relative hero-background"
              style={{
                backgroundImage: `url(${webbg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "520px",
                overflow: "visible",
                position: "relative",
              }}
            >
        <Container className="flex-grow-1 d-flex flex-column justify-content-center pt-5 pe-3 pe-md-0 paddingsection">
          <Row className="align-items-center">
            {/* Left Column - Text */}
            <Col md={7} className="text-md-start text-start ">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "5rem",
                  lineHeight: "1.0",
                  color: "#ffffffff",
                }}
              >
                <span className=" text-white">Transform Your </span>
                <br />
                <span style={{ marginLeft: "13px" }}>Idea</span>
                <span
                  style={{
                    color: "#418ED6",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {" "}
                  Into Reality
                </span>
              </h1>

              <Button
                variant="dark"
                className="rounded-pill d-inline-flex align-items-center mt-4 px-4 py-2"
                data-cal-link="rida-ayesha-hm81ov/secret"
                data-cal-config='{"layout":"month_view"}'
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  backgroundColor: "#ffffffff",
                  border: "none",
                  color :"#418ED6",
                  width: "auto",
                  // fontSize: "18px",
                }}
              >
                Book an appointment
                <span style={{ marginLeft: "8px", fontSize: "1.4rem" }}>➔</span>
              </Button>
            </Col>

            {/* Right Column - Image */}
            <Col
              md={5}
              className="text-center mt-4 mt-md-0 d-none d-md-flex justify-content-center"
            >
              <div
                style={{
                  // backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "200px",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={image}
                  alt="eazisols Logo"
                  width={500} 
                  height={200} 
                  style={{
                    height: "auto", 
                    width: "100%",
                    maxHeight: "300px", 
                    objectFit: "contain", 
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
