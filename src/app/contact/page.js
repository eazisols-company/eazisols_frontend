"use client";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import useAPiAuth from "../components/useApiAuth";
import CapgeminiCON from "@/app/assets/CapgeminiCON.webp";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSnackbar } from "../components/Snakbar";

export default function ContactPage() {
  const { postData, getData } = useAPiAuth();
  const { handleSnackbarOpen } = useSnackbar();
  const handleSubmit = async (formData) => {
    console.log("🚀 ~ handleSubmit ~ formData:", formData)
    const cleanedFormData = {
      ...formData,
      fullName: formData.fullName.replace(/\s{2,}/g, " ").trim(),
      company_name: formData.company_name.replace(/\s{2,}/g, " ").trim(),
      message: formData.message.trim(),
    };
    postData(
      "/contact-us",
      cleanedFormData,
      (data) => {
        console.log("API Success:", data);
        handleSnackbarOpen("Form sent successfully!", "success");
      },
      (error) => {
        console.error("user error:", error);
        handleSnackbarOpen("Something went wrong.", "error");
      }
    );
    console.log(cleanedFormData);
  };
  return (
    <>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${CapgeminiCON.src})`,
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
            {`Let's Talk`}
          </h1>{" "}
          <br />
          <p
            className="lead text-white mt-2"
            style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
          >
           {`Have a project in mind or a question about our services? We'd love
            to hear from you.`}
          </p>
        </div>
      </div>
      <section style={{ backgroundColor: "#d2e4f5", padding: "60px 20px" }}>
        <Container className="paddingsection">
          <Row className="align-items-center">
            {/* LEFT SIDE */}
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2
                className="fw-bold mb-3"
                style={{ fontSize: "2rem", color: "#000" }}
              >
                Reach Us Directly
              </h2>
              <p className="mb-3">
                <strong>Office:</strong> Lahore, Pakistan
              </p>
              <p className="mb-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@eazisols.com"> info@eazisols.com</a>
              </p>
              <p className="mb-3">
                <strong>Phone:</strong> +92 321 8881156
              </p>
              <p className="mb-4">
                <strong>Hours:</strong> Mon-Fri | 10:00 AM - 7:00 PM
              </p>

              {/* Social Icons */}
              <div className="d-flex gap-3 mb-4">
                <a
                  href="https://www.linkedin.com/company/eazisols/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} style={{ color: "#0A66C2" }} />
                </a>
                <a
                  href="https://www.facebook.com/eazisols"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} style={{ color: "#1877F2" }} />
                </a>
                <a
                  href="https://www.instagram.com/eazisols/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} style={{ color: "#E1306C" }} />
                </a>
              </div>
            </Col>

            {/* RIGHT SIDE */}
            <Col lg={6} className="d-flex justify-content-end ">
              <ContactForm buttonText="Sending..."/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
