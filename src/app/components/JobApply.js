"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import useAPiAuth from "../components/useApiAuth";
import { useSnackbar } from "../components/Snakbar";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "../globals.css";

const Section = ({ title, children, onClear }) => (
  <Box mb={4}>
    {title && (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontWeight={600}>{title}</Typography>
        <Typography
          variant="caption"
          sx={{
            cursor: "pointer",
            opacity: 0.6,
            userSelect: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={onClear}
        >
          Clear
        </Typography>
      </Box>
    )}
    {children}
  </Box>
);

export default function JobApply() {
  const [formData, setFormData] = useState({
    career_id: 4,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    file: null,
  });
  const { postData, getData } = useAPiAuth();
  const { handleSnackbarOpen } = useSnackbar();
  const router = useRouter();
  const [jobId, setJobId] = useState(null);
    const [job, setJob] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.file) newErrors.file = "Resume is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0){
      setLoading(false);
      return;
    } 

    const form = new FormData();
    form.append("name", `${formData.firstName} ${formData.lastName}`);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("headline", formData.headline || "");
    form.append("address", formData.address || "");
    form.append("career_id", 4);

    if (formData.file) {
      form.append("resume", formData.file);
    }

    postData(
      "/api/apply-for-job",
      form,
      (data) => {
        handleSnackbarOpen("Form sent successfully!", "success");
        setFormData({
          career_id: 4,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          file: null,
          headline: "",
          address: "",
        });
        setErrors({});
        setLoading(false);
      },
      (error) => {
        console.error("user error:", error);
        handleSnackbarOpen("Something went wrong.", "error");
        setLoading(false);
      }
    );
  };
  const handleClear = () => {
    setFormData({
      career_id: 4,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: null,
      headline: "",
      address: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "firstName") {
      let cleaned = value.replace(/[^A-Za-z .,'-]/g, "").slice(0, 20);
      cleaned = cleaned.replace(/\s{2,}/g, " ");
      const capitalized = cleaned.replace(
        /\b\w+/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      setFormData((prev) => ({ ...prev, [name]: capitalized }));
      return;
    }

    if (name === "lastName") {
      let cleaned = value.replace(/[^A-Za-z .,'-]/g, "").slice(0, 20);
      cleaned = cleaned.replace(/\s/g, " ");
      // cleaned = cleaned.replace(/\s{2,}/g, " ");

      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "email") {
      let cleaned = value.replace(/\s/g, "").slice(0, 100);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "phone") {
      let cleaned = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "address") {
      const cleaned = value.slice(0, 200);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "headline") {
      const cleaned = value.slice(0, 150);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const searchParams = useSearchParams();

useEffect(() => {
  const qid = searchParams?.get("jobId");
  if (qid) setJobId(qid);
}, [searchParams]);
useEffect(() => {
  if (!jobId) return;
  getData(
    `/api/careers/${jobId}`,
    (res) => {
      const jobObj = res?.data?.data || res?.data || res;
      setJob(jobObj);
    },
    (err) => {
      console.error("Failed to load job detail:", err);
    }
  );
}, [jobId, getData]);

  return (
    <>
     <div
            style={{
              backgroundColor: "#418ED6",
              padding: "80px 20px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{ textAlign: "center", mb: 4, color: "white" }}
            >
              {job.title}
            </Typography>
          </div>
      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 3 }}>
          <Box sx={{ display: "flex", borderBottom: "none" }}>
            <Button
              variant="text"
              onClick={() => router.back()}
              sx={{
                color: "#000000",
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "none",
                borderBottom: "2px solid transparent",
                "&:hover": { color: "#323232" },
              }}
            >
              Overview
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#418ED6",
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "none",
                borderBottom: "2px solid #418ED6",
                ml: 3,
              }}
              disableRipple
            >
              Application
            </Button>
          </Box>
        </Box>

        <Box sx={{ maxWidth: 500, mx: "auto", bgcolor: "#fff", py: "6",px: { xs: 2, sm: 3, md: 0 },  }}>
          <Section title=" Personal information" onClear={handleClear}>
            <Box display="flex" gap={2} mb={2}>
              <TextField
                fullWidth
                size="small"
                label="First name"
                // placeholder="First name"
                required
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                error={!!errors.firstName}
                helperText={errors.firstName}
                // FormHelperTextProps={{ style: { color: "#d32f2f" } }}
              />
              <TextField
                fullWidth
                size="small"
                label="Last name"
                placeholder="surname"
                required
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                // FormHelperTextProps={{ style: { color: "#d32f2f" } }}
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                size="small"
                label="Email"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                name="email"
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                // FormHelperTextProps={{ style: { color: "#d32f2f" } }}
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                size="small"
                label="Headline (Optional)"
                value={formData.headline || ""}
                name="headline"
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                size="small"
                label="Phone"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ minWidth: 64 }}>
                      +92
                    </InputAdornment>
                  ),
                }}
                value={formData.phone}
                name="phone"
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                // FormHelperTextProps={{ style: { color: "#d32f2f" } }}
              />
              
            </Box>

            <Box>
              <TextField
                fullWidth
                size="small"
                label="Address"
                placeholder="Lahore, Pakistan"
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Box>
          </Section>

          <Divider />
          <Section>
            <Box mb={1} display="flex" alignItems="center" gap={0.5}>
              <Typography component="label" fontSize={14} fontWeight={600}>
                <Box component="span" color="error.main" mr={0.5}>
                  *
                </Box>
                Resume
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px dashed #94a3b8",
                borderRadius: 2,
                p: 4,
                textAlign: "center",
                color: "#64748b",
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "#d2e4f5",
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 34,
                  color: "#4d8fcd",
                  cursor: "pointer",
                }}
                onClick={() => document.getElementById("fileInput")?.click()}
              >
                ⬆
              </Box>

              <Typography
                component="span"
                fontSize={14}
                fontWeight={600}
                sx={{ color: "#4d8fcd", cursor: "pointer" }}
                onClick={() => document.getElementById("fileInput")?.click()}
              >
                Upload a file
              </Typography>
              <Typography component="span" fontSize={14} color="text.secondary">
                {" "}
                or drag and drop here
              </Typography>

              <input
                id="fileInput"
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  const allowedTypes = [
                    "application/pdf",
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  ];
                  if (file && !allowedTypes.includes(file.type)) {
                    setErrors((prev) => ({
                      ...prev,
                      file: "Only PDF or Word documents are allowed.",
                    }));
                    setFormData((prev) => ({ ...prev, file: null }));
                  } else {
                    setFormData((prev) => ({ ...prev, file }));
                    setErrors((prev) => ({ ...prev, file: undefined }));
                  }
                }}
                style={{ display: "none" }}
              />

              {errors.file && (
                <Typography fontSize={12} color="error" mt={1}>
                  {errors.file}
                </Typography>
              )}

              {formData.file && (
                <Typography fontSize={12} mt={1}>
                  {formData.file.name}
                </Typography>
              )}
            </Box>
          </Section>

          <Divider />

          <Button
            fullWidth
            variant="contained"
            // type="submit"
            sx={{
              bgcolor: "#4d8fcd",
              fontWeight: 600,
              "&:hover": { bgcolor: "#4d8fcd" },
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit application"}
          </Button>
        </Box>
      </Box>
    </>
  );
}
