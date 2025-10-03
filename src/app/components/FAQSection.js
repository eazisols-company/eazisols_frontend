"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const faqs = [
  {
    question:
      "What are the services provided by your software development firm?",
    answer:
      "Our firm specializes in delivering a broad spectrum of professional services in the field of software development. Our core competencies encompass custom software development, mobile app development, web application development, software consulting, and software maintenance. We extend our services to diverse industries, catering to businesses of all sizes with a commitment to excellence.",
  },
  {
    question:
      "What is the level of expertise that your team possesses in the field of software development?",
    answer:
      "Our team excels in the field of software development, with a strong focus on creating cutting-edge web and mobile applications. We have a wealth of experience in crafting solutions using the latest technologies and frameworks. Our expertise spans various aspects of development, ensuring that we can deliver robust and scalable applications tailored to your specific requirements. We are committed to staying abreast of industry trends and consistently strive for excellence in delivering high-quality software solutions.",
  },
  {
    question:
      "Can you explain the software development process at your company?",
    answer:
      "Our software development process adheres to industry best practices, encompassing requirements analysis, design, development, testing, deployment, and continuous support. Emphasizing transparent communication, client engagement, and agile methodologies, we deliver resilient and scalable software solutions.",
  },
  {
    question:
      "What technologies do you specialize in for software development?",
    answer:
      "Our proficiency spans a diverse array of technologies, encompassing, but not restricted to, Ruby on Rails, AWS, Webflow, UI/UX design, JavaScript (Node.js and React.js), mobile development (Flutter, React Native), database technologies, and cloud platforms. Our team remains up-to-date with the latest industry trends to deliver cutting-edge solutions.",
  },
  {
    question:
      "What measures do you implement to guarantee the security of the software developed by your team?",
    answer:
      "At the forefront of our software development process is a steadfast commitment to security. We prioritize this aspect by adhering to industry-standard security practices, conducting thorough code reviews, implementing encryption protocols, and performing regular security audits. This meticulous approach enables us to identify and address vulnerabilities, ensuring the confidentiality and integrity of your software.",
  },
  {
    question:
      "What is the usual timeframe for completing a software development project?",
    answer:
      "The duration of a software development project varies, contingent upon its complexity, scope, and specific requirements. During the initial project planning phase, we collaborate closely with our clients to establish realistic timelines. Throughout the development cycle, we maintain transparency by providing regular updates, ensuring alignment with deadlines.",
  },
  {
    question:
      "How do you manage alterations to project requirements throughout the development phase?",
    answer:
      "We acknowledge the possibility of project requirements evolving during development. Embracing agile methodologies, we prioritize flexibility to seamlessly adapt to changes. Our team fosters open communication channels to facilitate efficient coordination and timely adjustments, all while minimizing any impact on the project timeline and budget.",
  },
  {
    question:
      "What kind of support and maintenance do you provide post-launch?",
    answer:
      "We provide thorough post-launch support and maintenance services, encompassing bug fixes, security patches, and continuous monitoring. Our objective is to guarantee the sustained success and optimal performance of your software solution.",
  },
  {
    question:
      "How do I get started with a software development project with your company?",
    answer:
      "To initiate the process, you can contact us through our contact form, email, or phone. Our team will quickly arrange a meeting to discuss your project requirements, goals, and address any specific questions you might have. Following this, we will devise a customized plan and furnish you with a detailed proposal for your software development project.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" bg-light">
      <Container style={{ marginTop: "20px", maxWidth: "1232px", }}>
        {/* Title Section */}
        <Row className="text-center mb-3">
          <Col>
            <h2
              className="faq-heading  fw-bold"
            >
              Frequently Asked Questions
            </h2>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-2  bg-white rounded-3 shadow-sm faq-box"
                style={{ cursor: "pointer" , padding: '6px 24px 6px' }}
                onClick={() => toggleFAQ(index)}
              >
                <div
                  className={`d-flex justify-content-between align-items-center faq-question ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  {faq.question}
                  <span style={{ fontSize: "1rem" }}>
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === index && (
                  <div
                    className="mt-3 text-muted"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
