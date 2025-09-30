"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";
import img1 from "@/app/assets/img1.png";
import img2 from "@/app/assets/img2.png";
import img3 from "@/app/assets/img3.png";
import img4 from "@/app/assets/img4.png";
import img5 from "@/app/assets/img5.png";
import img6 from "@/app/assets/img6.png";
import img7 from "@/app/assets/img7.png";
import Discover from "@/app/assets/Discover.png";
import UIUX from "@/app/assets/UIUX.png";
import frontend from "@/app/assets/frontend.png";
import backend from "@/app/assets/backend.png";
import testing from "@/app/assets/testing.png";
import Maintenance from "@/app/assets/Maintenance.png";
import launch from "@/app/assets/launch.png";

const processSteps = [
  {
    number: "01",
    title: "Strategy & Discovery",
    description:
      `Every successful product begins with clarity. We sit down with you to map out your vision, define the must-have features, and set priorities for your first release. By the end of this phase, we're aligned on goals, roadmap, and success metrics.`,
    image: Discover,
  },
  {
    number: "02",
    title: "Experience Design",
    description:
      `Great products are built around people. We start with user journeys and wireframes, then craft intuitive, polished designs for each screen or page. This is where your idea starts to take shape visually.`,
    image: UIUX,
  },
  {
    number: "03",
    title: "Front-End Development",
    description:
      `Designs turn into reality as our developers code the interface. You'll see interactive previews early, giving you a chance to experience your product firsthand and share feedback before we move further.`,
    image: frontend,
  },
  {
    number: "04",
    title: "Back-End Development",
    description:
      `Here's where the real engine comes alive. From databases to APIs, we code the features that power your product. Regular updates keep you in the loop so you can track progress as we build.`,
    image: backend,
  },
  {
    number: "05",
    title: "Testing & Refinement",
    description:
      `Before launch, we put your product through rigorous testing — functional, performance, and cross-device. Bugs are expected, but we eliminate them early so your users enjoy a smooth experience from day one.`,
    image: testing,
  },
  {
    number: "06",
    title: "Launch Day",
    description:
      `With everything tested and approved, it's time to go live. Mobile apps are submitted to Apple and Google for review, while websites are deployed directly to servers. We handle the technical side — you get to celebrate your first release.`,
    image: Maintenance,
  },
  {
    number: "07",
    title: "Growth & Support",
    description:
      `A launch is just the beginning. We provide ongoing maintenance, updates, and enhancements so your product keeps evolving with your business and your users`,
    image: launch,
  },
];

export default function ProcessTimeline() {
  return (
    <>
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
          {/* <p className="text-uppercase text-muted mb-1 pt-5">OUR PROCESS</p> */}
          <h2 className="display-4 fw-bold pt-5" style={{ fontSize: "40px" }}>
            90 Days Launch
          </h2>
        </div>

        <div
          className="container process-timeline "
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            maxWidth: "1110px",
            position: "relative",
          }}
        >
          <div>
            {processSteps.map((step, index) => (
              <div key={index} className="timeline-item ">
                <div className="timeline-content">
                  <div className="timeline-number">{step.number}</div>
                  <div className="row align-items-center ">
                    {index % 2 === 0 ? (
                      <>
                        <div className="col-md-6 order-md-2 d-flex justify-content-center">
                          <div className="timeline-image text-center d-none d-md-block">
                            <Image
                              src={step.image}
                              alt={step.title}
                              width={300}
                              height={200}
                              className="process-illustration"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-6 order-md-1"
                          style={{ paddingRight: "80px" }}
                        >
                          <div
                            className="timeline-text text-start"
                            style={{ maxWidth: "400px" }}
                          >
                            <h3 className="timeline-title">{step.title}</h3>
                            <p className="timeline-description">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-6 d-flex justify-content-start">
                          <div className="timeline-image text-center d-none d-md-block">
                            <Image
                              src={step.image}
                              alt={step.title}
                              width={300}
                              height={200}
                              className="process-illustration"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-6"
                          style={{ paddingLeft: "80px" }}
                        >
                          <div
                            className="timeline-text text-start ps-3 ps-md-0"
                            style={{ maxWidth: "400px" }}
                          >
                            <h3 className="timeline-title">{step.title}</h3>
                            <p className="timeline-description">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
