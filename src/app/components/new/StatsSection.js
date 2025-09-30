"use client";

import { Container } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import statimg from "@/app/assets/statimg.png";
import Sheild from "@/app/assets/Sheild.png";

const stats = [
  {
    prefix: "We coded and designed over",
    number: 40000,
    suffix: "Hours",
    iconComponent: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    number: 1000000,
    suffix: "+",
    description: "people use the apps monthly that we created",
    iconComponent: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    prefix: "We wrote over",
    number: 50000,
    suffix: "+",
    description: "lines of code",
    iconComponent: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    prefix: "We worked with over",
    number: 50,
    suffix: "+",
    description: "Different companies",
    iconComponent: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M12 7v10" />
        <path d="M17 7v10" />
        <path d="M7 7v10" />
      </svg>
    ),
  },
];

function AnimatedNumber({ value, duration = 2000 }) {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const currentValue = Math.floor(
        startValue + (value - startValue) * progress
      );
      setCurrent(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isVisible]);

  return <span ref={ref}>{current.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="stats-section" style={{ backgroundColor: "#f8f8f8" }}>
      <Container
        className="paddingsection"
        style={{
          backgroundColor: "#ffffffff",
          maxWidth: "1312px",
          marginTop: "70px",
          borderRadius: "20px",
        }}
      >
        <div className="text-center mb-5">
          <p
            className="text-uppercase text-muted mb-2 pt-5"
            style={{ letterSpacing: "0.05em", fontSize: "0.875rem" }}
          >
            WE WORKED WITH ALL OF THEM
          </p>
          <h2 className="display-5 fw-bold mb-3">We got you covered</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Leading global tech services firm, delivering innovative solutions,
            exceptional results, and fostering lasting client relationships.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stats-illustration">
            <Image
              src={Sheild}
              alt="Stats Illustration"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <div className="stats-content">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.iconComponent}</div>
                <div className="stat-info">
                  {stat.prefix && (
                    <div className="stat-prefix">{stat.prefix}</div>
                  )}
                  <div className="stat-number">
                    <AnimatedNumber value={stat.number} />
                    {stat.suffix}
                  </div>
                  {stat.description && (
                    <div className="stat-description">{stat.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
