"use client";
import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Box, Container } from "@mui/material";
import "../globals.css";
import useAPiAuth from "../components/useApiAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function JobOpenings() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const { getData } = useAPiAuth();
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    keyword: "",
    workplace: "",
    location: "",
    department: "",
    workType: "",
  });

  useEffect(() => {
    setLoading(true);
    getData(
      "/api/careers",
      (data) => {
        console.log("Raw API response:", data);
        // const list = Array.isArray(data?.data?.data) ? data.data.data : [];
        const list = Array.isArray(data?.data) ? data.data : [];
        console.log("🚀 ~ useEffect ~ list:", list);
        setJobs(list);
        setLoading(false);
      },
      (error) => {
        console.error("Failed to fetch jobs", error);
        setLoading(false);
      }
    );
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#418ED6",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Job Search
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "700px",
              padding: "6px 10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <input
              type="text"
              placeholder="Search by title, team, or keyword..."
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                padding: "12px 20px",
                fontSize: "1rem",
                borderRadius: "999px",
                minWidth: "0",
              }}
              value={filters.keyword}
              onChange={(e) =>
                setFilters({ ...filters, keyword: e.target.value })
              }
            />

            <button
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#418ED6",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <section className="py-5 px-3 bg-light">
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
          <h2 className="fw-bold text-center">Find Your Role at eazisols</h2>
          <p className="text-muted text-center">
            Rewrite your future. Search and apply for a job today
          </p>

          {/* Search Input */}
          {/* <Box className="mb-3">
            <TextField
              fullWidth
              placeholder="Search by title, team, or keyword..."
              variant="outlined"
              InputProps={{
                sx: { height: 40 },
              }}
              value={filters.keyword}
              onChange={(e) =>
                setFilters({ ...filters, keyword: e.target.value })
              }
            />
          </Box> */}

          {/* Dropdown Filters */}
          <Box className="row g-3">
            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.workplace}
                onChange={(e) =>
                  setFilters({ ...filters, workplace: e.target.value })
                }
              >
                <MenuItem value="" style={{ color: "#808080" }}>
                  Workplace Type
                </MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="On Site">On Site</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </TextField>
            </Box>

            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              >
                <MenuItem value="" style={{ color: "#808080" }}>
                  Location
                </MenuItem>
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="UAE">UAE</MenuItem>
              </TextField>
            </Box>

            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.department}
                onChange={(e) =>
                  setFilters({ ...filters, department: e.target.value })
                }
              >
                <MenuItem value="" style={{ color: "#808080" }}>
                  Department
                </MenuItem>
                <MenuItem value="Development">Software Development</MenuItem>
                <MenuItem value="QA">Quality Assurance QA</MenuItem>
                <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
                <MenuItem value="HR">Human Resource HR</MenuItem>
              </TextField>
            </Box>

            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.workType}
                onChange={(e) =>
                  setFilters({ ...filters, workType: e.target.value })
                }
              >
                <MenuItem value="" style={{ color: "#808080" }}>
                  Work Type
                </MenuItem>
                <MenuItem value="Full-time">Full Time</MenuItem>
                <MenuItem value="Part-time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </TextField>
            </Box>
          </Box>
          <Box className="text-end mt-2" sx={{ cursor: "pointer" }}>
            <span
              style={{
                textDecoration: "underline",
                color: "#0d6efd",
                fontSize: "14px",
              }}
              onClick={() =>
                setFilters({
                  keyword: "",
                  workplace: "",
                  location: "",
                  department: "",
                  workType: "",
                })
              }
            >
              Clear
            </span>
          </Box>

          {/*  Jobs Display with single filtering block and console logging */}
          <div className="mt-4">
            {(() => {
              const keyword = filters.keyword.toLowerCase();
              const filtered = jobs.filter((job) => {
                const title = job.title?.toLowerCase() || "";
                const department = job.department?.toLowerCase() || "";
                const workplace = job.workplace_type?.toLowerCase() || "";
                const location = job.location?.toLowerCase() || "";
                const workType = job.work_type?.toLowerCase() || "";

                return (
                  (!filters.keyword ||
                    title.includes(keyword) ||
                    department.includes(keyword)) &&
                  (!filters.workplace ||
                    workplace === filters.workplace.toLowerCase()) &&
                  (!filters.location ||
                    location
                      .toLowerCase()
                      .includes(filters.location.toLowerCase())) &&
                  (!filters.department ||
                    department === filters.department.toLowerCase()) &&
                  (!filters.workType ||
                    workType === filters.workType.toLowerCase())
                );
              });

              if (loading) {
                return (
                  <div className="text-center py-5">
                    <span className="loader" />
                  </div>
                );
              }

              if (filtered.length === 0) {
                return (
                  <div className="text-center py-5 text-muted">
                    <h5>No job openings match your selected filters.</h5>
                    <p>Try adjusting your search or filter criteria.</p>
                  </div>
                );
              }

              return filtered.map((job, idx) => {
                console.log("🚀 ~ returnfiltered.map ~ job:", job);

                return (
                  <Link
                    key={idx}
                    href={`/job-opening/${job.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className={`job-row ${
                        idx % 2 === 0 ? "job-row--even" : "job-row--odd"
                      } py-3 border-bottom d-flex flex-md-row justify-content-between align-items-start`}
                      // className="py-3 border-bottom d-flex flex-md-row justify-content-between align-items-start"
                      style={{ width: "100%" }}
                    >
                      <div className="mb-2 ms-2" style={{ width: "50%" }}>
                        <h5 className="fw-bold text-success mb-1">
                          {job.title}
                        </h5>
                      </div>
                      <div
                        className="d-flex justify-content-center text-muted gap-4"
                        style={{ width: "50%" }}
                      >
                        <span className="fw-semibold ms-2" style={{ width: "15%" }}>
                          {job.workplace_type}
                        </span>
                        <span style={{ width: "15%" }}>
                          {job.location
                            ?.split(/[\s,]+/)
                            .filter(Boolean)
                            .pop() || ""}
                        </span>
                        <span style={{ width: "30%" }}>
                          {job.department || "Development"}
                        </span>
                        <span style={{ width: "30%" }}>
                          {job.work_type || "Full Time"}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              });
            })()}
          </div>
        </Container>
      </section>
    </>
  );
}
