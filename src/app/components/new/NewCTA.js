"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function NewCTA() {
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
    <section
      className="d-flex justify-content-center mt-5 new-cta-section "
      
    >
      <Container
      className=" mb-5"
      style={{
        background: 'linear-gradient(90deg, #418ED6 50%, #2165B1 100%)',
        padding: "60px 0",
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "30px", 
      }} >
        <Row className="text-center cta-text">
          <Col>
            <h2
            className="cta-heading"
              style={{
                fontWeight: 700,
                fontSize: "2.2rem",
                marginBottom: "12px",
                 color: "#fff !important",
              }}
            >
              Let&apos;s Get To Work!
            </h2>
            <p className="cta-heading"
              style={{
                color: "#fff !important",
                fontSize: "1.1rem",
                marginBottom: "30px",
              }}
            >
              We&apos;re ready to get started on your next creative project.
              <span className="d-none d-md-block">All you need to do is hit the button below.</span>
            </p>

            <Button
              variant="dark"
              className="rounded-pill d-inline-flex align-items-center mt-2 px-4 py-2 cta-button"
              data-cal-link="eazisols/30min"
              data-cal-config='{"layout":"month_view"}'
              style={{
                fontWeight: "500",
                fontSize: "1rem",
                backgroundColor: "#fff",
                border: "none",
                color :"#418ED6",
              }}
            >
              Book an appointment
              <span style={{ marginLeft: "8px", fontSize: "1.2rem" }}>➔</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
