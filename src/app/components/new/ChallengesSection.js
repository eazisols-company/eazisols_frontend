"use client";

import { Container } from "react-bootstrap";
import Image from "next/image";
import challange from "@/app/assets/challange.png";

const challenges = [
  {
    icon: "😕",
    title: "No technical skills?",
    description:
      "You have no experience developing software and no code tools are too confusing or limited in their functionality",
  },
  {
    icon: "💰",
    title: "High agency prices?",
    description:
      "Sick of big agencies treating you like numbers and trying to get as much money from you as possible",
  },
  {
    icon: "🏢",
    title: "Slow in-house team?",
    description:
      "Hiring developers, designers, product managers, QA engineer stakes months and costs way more than you can afford",
  },
  {
    icon: "❓",
    title: 'You don\'t talk "tech"?',
    description:
      "You don't understand technical jargon and you are not sure what are best practices, or bad coding practices",
  },
];

export default function ChallengesSection() {
  return (
    <section
      className="challenges-section"
      style={{ backgroundColor: "#f8f8f8" }}
    >
      <Container
      className="paddingsection"
        style={{
          backgroundColor: "#ffffffff",
          maxWidth: "1312px",
          borderRadius: "20px",
          marginTop: "70px",
        }}
      >
        <div className="text-center mb-5">
          <p
            className="text-uppercase text-muted mb-2 pt-5"
            style={{ letterSpacing: "0.05em", fontSize: "0.875rem" }}
          >
            YOU WANT TO START A SAAS STARTUP, BUT...
          </p>
          <h2 className="display-5 fw-bold mb-3">Struggling to get started?</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Non-technical SaaS founders face numerous challenges, and we are
            here to help you overcome them. Do any of these sound familiar to
            you?
          </p>
        </div>

        <div className="challenges-grid ">
          <div className="challenges-content pb-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                <span
                  className="challenge-icon"
                  role="img"
                  aria-label={challenge.title}
                >
                  {challenge.icon}
                </span>
                <h3 className="challenge-title">{challenge.title}</h3>
                <p className="challenge-description">{challenge.description}</p>
              </div>
            ))}
          </div>

          <div className="challenges-illustration">
            <Image
              src={challange}
              alt="Challenges Illustration"
              width={400}
              height={300}
              priority
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
