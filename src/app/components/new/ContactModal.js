"use client";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { useSnackbar } from "../Snakbar";
import useApiAuth from "../useApiAuth";
import { Dialog, IconButton, Toolbar } from "@mui/material";
import { MdClose } from "react-icons/md";

const ContactModal = ({
  open,
  onClose,
  title = "Contact Form",
  children,
    buttonText = "Please wait...",
}) => {


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    company_name: "",
    subject: "General Inquiry",
  });

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { postData, getData } = useApiAuth();
  const { handleSnackbarOpen } = useSnackbar();
 const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const isPhoneValid = formData.phone.trim() !== "";
  const isMessageValid = formData.message.trim().length >= 20;
  if (form.checkValidity() === false || !isPhoneValid || !isMessageValid) {
    event.stopPropagation();
    setValidated(true);
    return;
  }

  setLoading(true);


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
  

  setLoading(false);

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  });

  setValidated(false);
};


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      let cleaned = value.replace(/[^A-Za-z .,'-]/g, "").slice(0, 50);
      cleaned = cleaned.replace(/\s{2,}/g, " ");

      const capitalized = cleaned.replace(
        /\b\w+/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );

      setFormData((prev) => ({ ...prev, [name]: capitalized }));
      return;
    }

    if (name === "company_name") {
      const cleaned = value.replace(/[0-9]/g, "").slice(0, 50);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "email") {
      const cleaned = value.replace(/\s/g, "").slice(0, 100);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }
    if (name === "message") {
      const cleaned = value.slice(0, 500);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog fullScreen open={open} onClose={onClose} maxWidth={false}
     PaperProps={{
    sx: {
      width: "500px", 
      height: "auto",
      maxWidth: "90vw",
      // maxHeight: "90vh",
      borderRadius: "12px",
    },
  }}>
        {/* <Toolbar
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              minHeight: "10px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <MdClose size={14} />
            </IconButton>
          </Toolbar> */}
    <div className="bg-white rounded-3  contact-form-box">
      <h3 className="mb-2">Get in Touch</h3>
      <p className="text-muted">Leave your details, we will reach out soon.</p>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row >
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small-label">Name *</Form.Label>
              <Form.Control
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                maxLength={50}
              />
              <Form.Control.Feedback type="invalid" style={{ marginTop: 0 }}>
                Enter a valid name
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small-label">Email *</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === " ") e.preventDefault();
                }}
                placeholder="Enter your email address"
                maxLength={100}
              />
              <Form.Control.Feedback type="invalid">
                Enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3 mb-0">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small-label">Phone Number *</Form.Label>
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={(phone) =>
                  setFormData((prev) => ({ ...prev, phone }))
                }
                inputClass="form-control"
                containerClass="phone-input"
              />
              {validated && formData.phone.trim() === "" && (
                <div className="text-danger small">
                  Phone number is required.
                </div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small-label">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Company name"
                maxLength={50}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3 mt-3">
          <Form.Label className="small-label">Inquiry Details *</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your project or query"
            maxLength={500}
            style={{ resize: "none", overflow: "auto", height: "80px" }}
          />
          {validated && formData.message.trim().length < 20 && (
            <div className="text-danger small mt-1">
              Please describe your query in at least 20 characters.
            </div>
          )}
        </Form.Group>

        <Button
          type="submit"
          variant="dark"
          className="w-100 mt-2 custom-submit-button"
          disabled={loading}
        >
          {loading ? buttonText : "Submit"}
        </Button>
      </Form>
    </div>
    </Dialog>
  );
    
};
export default ContactModal;