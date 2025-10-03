"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

const tabs = ["Time", "Pricing", "Scalability"];

const timeData = [
  { name: "Our Team", value: "1.8x", color: "#0ea5e9", baseWidth: "60%" },
  { name: "No Code Agency", value: "1x", color: "#333333", baseWidth: "20%" },
  {
    name: "Traditional Agency",
    value: "5.7x",
    color: "#333333",
    baseWidth: "70%",
  },
  { name: "In-House Team", value: "7.2x", color: "#333333", baseWidth: "90%" },
];

const scalabilityData = [
  {
    name: "Our Team",
    value: "250,000 Users",
    color: "#0ea5e9",
    baseWidth: "60%",
  },
  {
    name: "No Code Agency",
    value: "50,000 Users",
    color: "#333333",
    baseWidth: "20%",
  },
  {
    name: "Traditional Agency",
    value: "100,000 Users",
    color: "#333333",
    baseWidth: "40%",
  },
  {
    name: "In-House Team",
    value: "150,000 Users",
    color: "#333333",
    baseWidth: "60%",
  },
];

const pricingData = [
  { name: "Our Team", value: "$50k", color: "#0ea5e9", baseWidth: "40%" },
  { name: "No Code Agency", value: "$30k", color: "#333333", baseWidth: "20%" },
  {
    name: "Traditional Agency",
    value: "$80k",
    color: "#333333",
    baseWidth: "60%",
  },
  { name: "In-House Team", value: "$120k", color: "#333333", baseWidth: "90%" },
];

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState("Time");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reset animation when tab changes
  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  }, [activeTab]);

  const renderComparison = (data) => (
    <div className="time-comparison">
      {data.map((item, index) => (
        <div key={index} className="comparison-row">
          <div className="comparison-label">{item.name}</div>
          <div className="comparison-bar-container">
            <div
              className="comparison-bar"
              style={{
                width: isVisible ? item.baseWidth : "0%",
                backgroundColor: item.color,
                transition: "width 1s ease-out",
              }}
            />
            <span className="comparison-value">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section style={{ backgroundColor: "#f8f8f8" }} ref={sectionRef}>
      <Container
        className="paddingsection"
        style={{
          backgroundColor: "#d6d5d5ff",
          maxWidth: "1312px",
          marginTop: "30px",
          borderRadius: "20px",
        }}
      >
        <div className="text-center mb-2">
          <p className="text-uppercase text-muted mb-1 pt-5">COMPARISON</p>
          <h2 className="display-4 fw-bold mb-3">
            Who is the right technology partner
            <br />
            for you?
          </h2>
          <p className="lead text-muted">
            Choosing the right technology partner doesn't only influence your
            SaaS product - it shapes your entire business. We're here to help
            you make the right choice.
          </p>
        </div>

        <div
          className="tabs-container text-center "
          style={{ marginBottom: "0" }}
        >
          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="comparison-content">
          {activeTab === "Time" && renderComparison(timeData)}
          {activeTab === "Pricing" && renderComparison(pricingData)}
          {activeTab === "Scalability" && renderComparison(scalabilityData)}
        </div>
      </Container>
    </section>
  );
}
