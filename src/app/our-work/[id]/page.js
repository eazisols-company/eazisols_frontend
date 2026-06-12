"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Container, Typography, Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import useApiAuth from "@/app/components/useApiAuth";
import ReuseContact from "@/app/components/ReuseContact";
import clock from "@/app/assets/clock.png";
import map from "@/app/assets/map.png";
import review from "@/app/assets/review.png";
import team from "@/app/assets/team.png";
import Image from "next/image";

const splitList = (t) =>
  (t || "")
    .split(/\r?\n|,|;|•/g)
    .map((x) => x.trim())
    .filter(Boolean);

const monthsBetween = (start, end) => {
  if (!start || !end) return null;
  const s = new Date(start);
  const e = new Date(end);
  if (isNaN(s.getTime()) || isNaN(e.getTime())) return null;

  let months =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  if (e.getDate() < s.getDate()) months -= 1;

  if (months < 0) return null;
  return months === 0
    ? "Less than 1 Month"
    : `${months} Month${months > 1 ? "s" : ""}`;
};

export default function CaseStudiesDetail() {
  const { id } = useParams();
  const caseId = Array.isArray(id) ? id[0] : id;

  const router = useRouter();
  const { getData } = useApiAuth();
  const [cases, setcases] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!caseId) return;
    getData(
      `/api/case-studies/${caseId}`,
      (res) => {
        const casesObj = res?.data?.data || res?.data || res;
        setcases(casesObj);
        setLoading(false);
      },
      (err) => {
        console.error("Failed to load case study:", err);
        setLoading(false);
      }
    );
  }, [caseId, getData]);

  if (loading)
    return (
      <Container sx={{ py: 6, textAlign: "center", minHeight: "70vh" }}>
        <span className="loader" />
      </Container>
    );

  if (!cases)
    return (
      <Container sx={{ py: 6, textAlign: "center", minHeight: "70vh" }}>
        <Typography variant="h6" color="error">
          case-studies not found
        </Typography>
        <Button onClick={() => router.back()}>Back</Button>
      </Container>
    );

  const splitList = (text) =>
    (text || "")
      .split(/\r?\n|,|;|•/g)
      .map((t) => t.trim())
      .filter(Boolean);

  // const monthsBetween = (start, end) => {
  //   if (!start || !end) return null;
  //   const s = new Date(start);
  //   const e = new Date(end);
  //   if (isNaN(s.getTime()) || isNaN(e.getTime())) return null;

  //   let months =
  //     (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  //   if (e.getDate() < s.getDate()) months -= 1;

  //   if (months < 0) return null;
  //   return months === 0
  //     ? "Less than 1 Month"
  //     : `${months} Month${months > 1 ? "s" : ""}`;
  // };

  return (
    <>
      <section className="workpadding ">
        {/* <Container className="paddingsection mt-4"> */}
        {cases.thumbnail && (
          <Image
            src={`https://admin.eazisols.com/${cases.thumbnail}`}
            alt={cases.title}
            width={400}
            height={100}
            style={{
              marginTop: "10px",
              borderRadius: "6px",
              marginBottom: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              objectFit: "cover",
            }}
          />
        )}
        <Row className="gy-4">
          <Col lg={3}>
            {/* Project Demands */}
            <div className="mb-4">
              <Typography
                variant="subtitle2"
                className="fw-bold text-uppercase"
              >
                Project Demands:
              </Typography>
              <ul className="ps-3 mt-2 mb-3 text-muted">
                {(cases?.project_demand || "")
                  .split(/\r?\n|,|;|•/g)
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
              </ul>
            </div>

            {/* Tech Stacks */}
            <div className="mb-2">
              <Typography
                variant="subtitle2"
                className="fw-bold text-uppercase"
              >
                Tech Stacks
              </Typography>
            </div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                fontSize: "14px",
                color: "#333",
              }}
            >
              {(cases?.tech_stack || "")
                .split(/\r?\n|,|;|•/g)
                .map((t) => t.trim())
                .filter(Boolean)
                .map((tech, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {tech}
                  </div>
                ))}
            </Box>
          </Col>
          <Col lg={3}>
            {/* Clients */}
            <div className="mb-4">
              <Typography
                variant="subtitle2"
                className="fw-bold text-uppercase"
              >
                Clients:
              </Typography>
              <Typography variant="body2" className="text-muted">
                {cases?.client_name || "—"}
              </Typography>
            </div>

            {/* Category */}
            <div className="mb-4">
              <Typography
                variant="subtitle2"
                className="fw-bold text-uppercase"
              >
                Category:
              </Typography>
              <Typography variant="body2" className="text-muted">
                {cases?.category || "—"}
              </Typography>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6}>
            <Typography variant="h6" fontWeight={600} className="mb-3">
              Problem Statement
            </Typography>
            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
              {cases?.short_summary || "—"}
            </Typography>
          </Col>
        </Row>
        <Row className="gy-4 justify-content-center mt-5">
          {/* Team Card */}
          <Col md={3}>
            <Box
              sx={{
                backgroundColor: "#418ED6",
                color: "white",
                borderRadius: 2,
                p: 3,
                height: "100%",
              }}
            >
              <Image src={team} alt="Team" style={{ height: 50, width: 65 }} />
              <Typography variant="subtitle1" className="fw-bold mt-2">
                Dedicated Team
              </Typography>

              <Box
                component="ul"
                sx={{ pl: 3, mt: 1, mb: 0, color: "inherit" }}
              >
                {(cases?.dedicated_team || "")
                  .split(/\r?\n|,|;|•|\s{2,}/g)
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .map((t, i) => (
                    <Typography
                      key={i}
                      component="li"
                      variant="body2"
                      sx={{ m: 0, lineHeight: 1.6, listStyleType: "disc" }}
                    >
                      {t}
                    </Typography>
                  ))}
              </Box>
            </Box>
          </Col>

          {/* Location */}
          <Col md={3}>
            <Box
              sx={{
                backgroundColor: "#f7f9fb",
                borderRadius: 2,
                p: 3,
                height: "100%",
              }}
            >
              <Image
                src={map}
                alt="Location"
                style={{ height: 50, width: 50 }}
              />
              <Typography variant="subtitle2" className="text-muted mt-2">
                {`Client's Location`}
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                {cases?.client_location || "—uk"}
              </Typography>
            </Box>
          </Col>

          {/* Reviews */}
          <Col md={3}>
            <Box
              sx={{
                backgroundColor: "#f7f9fb",
                borderRadius: 2,
                p: 3,
                height: "100%",
              }}
            >
              <Image
                src={review}
                alt="Reviews"
                style={{ height: 50, width: 50 }}
              />
              <Typography variant="subtitle2" className="text-muted mt-2">
                Client Reviews
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                {cases.rating || "5 stars"}
              </Typography>
            </Box>
          </Col>

          {/* Timeline */}
          <Col md={3}>
            <Box
              sx={{
                backgroundColor: "#f7f9fb",
                borderRadius: 2,
                p: 3,
                height: "100%",
              }}
            >
              <Image
                src={clock}
                alt="Timeline"
                style={{ height: 50, width: 50 }}
              />
              <Typography variant="subtitle2" className="text-muted mt-2">
                Timeline of Project
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                {(() => {
                  const s = cases?.start_date
                    ? new Date(cases.start_date)
                    : null;
                  const e = cases?.end_date ? new Date(cases.end_date) : null;
                  if (!s || !e || isNaN(s) || isNaN(e)) return "N/A";
                  let m =
                    (e.getFullYear() - s.getFullYear()) * 12 +
                    (e.getMonth() - s.getMonth());
                  if (e.getDate() < s.getDate()) m -= 1;
                  if (m < 0) return "N/A";
                  return m === 0
                    ? "Less than 1 Month"
                    : `${m} Month${m > 1 ? "s" : ""}`;
                })()}
              </Typography>
            </Box>
          </Col>
        </Row>

        {/* --- Solution We Provided Section --- */}
        <Row className="mt-5">
          <Col>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Solution We Provided
            </Typography>
            <Typography variant="body1" style={{ lineHeight: 1.8 }}>
              {cases?.solution_we_provide || "NA"}
            </Typography>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Result
            </Typography>
            <Typography variant="body1" style={{ lineHeight: 1.8 }}>
              {cases?.result || "NA"}
            </Typography>
          </Col>
        </Row>

        {/* {cases.description && (
          <Box mb={4} p={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Description
            </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: cases.description }}
              style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
            />
          </Box>
        )} */}
        {/* </Container> */}
      </section>
      <ReuseContact />
    </>
  );
}
