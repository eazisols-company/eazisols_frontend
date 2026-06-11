"use client";

import Image from "next/image";
import Sheild from "@/app/assets/Sheild.png";
import clock from "@/app/assets/clock.svg";
import people from "@/app/assets/people.svg";
import technical from "@/app/assets/technical.svg";
import building from "@/app/assets/building.svg";
import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";

function AnimatedNumber({ value, duration = 2000, suffix = "" }) {
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

 
   return (
    <span ref={ref}>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Statics() {
  return (
    <>
      <section className="stats-wrapper py-5">
        <Container className="paddingsection">
          <div className="text-center mb-5">
            <p
              className="text-uppercase text-muted mb-2 "
              style={{ letterSpacing: "0.05em", fontSize: "0.875rem" }}
            >
              WE WORKED WITH ALL OF THEM
            </p>
            <h2 className="display-5 fw-bold mb-3">We got you covered</h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "800px" }}
            >
              Leading global tech services firm, delivering innovative
              solutions, exceptional results, and fostering lasting client
              relationships.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            {/* Left  */}
            <div className="col-lg-5 text-center">
              <div className="illus-holder d-inline-block">
                <Image
                  src={Sheild}
                  alt="Illustration"
                  className="img-fluid"
                  priority
                />
              </div>
            </div>

            {/* Right cards */}
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="stack-col">
                    {/* 1 — tall */}
                    <div className="card stat-card tall text-center p-4 position-relative align-items-center">
                      <div className="card-body d-flex flex-column justify-content-between p-0">
                        <div>
                          <p className="stat-eyebrow mb-2">
                            We coded and designed over
                          </p>
                          <div className="stat-number mb-1"> <AnimatedNumber value={40000} suffix="" /></div>
                          <div className="stat-subtitle">Hours</div>
                        </div>
                        <div className="icon-bottom">
                          <Image src={clock} alt="Clock" />
                        </div>
                      </div>
                    </div>

                    {/* 3 — short */}
                    <div className="card stat-card short text-center p-4 position-relative align-items-center">
                      <div className="card-body d-flex flex-column justify-content-between p-0">
                        <div className="icon-top mb-2">
                          <Image
                            src={technical}
                            alt="Code"
                            height={30}
                            width={70}
                          />
                        </div>
                        <div>
                          <p className="stat-eyebrow mb-2">We wrote over</p>
                          <div className="stat-number mb-1">  <AnimatedNumber value={50000} suffix="+" /></div>
                          <div className="stat-subtitle">lines of code</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="stack-col">
                    {/* 2 — short */}
                    <div className="card stat-card short text-center p-4 position-relative align-items-center">
                      <div className="card-body d-flex flex-column justify-content-between p-0">
                        <div className="icon-top mb-2">
                          <Image src={people} alt="People" />
                        </div>
                        <div>
                          <div className="stat-number mb-1"> <AnimatedNumber value={3500000} suffix="+" /></div>
                          <p className="stat-caption mb-0">
                            people use the apps monthly that we created
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 4 — tall */}
                    <div className="card stat-card tall text-center p-4 position-relative align-items-center">
                      <div className="card-body d-flex flex-column justify-content-between p-0">
                        <div>
                          <p className="stat-eyebrow mb-2">
                            We worked with over
                          </p>
                          <div className="stat-number mb-1"><AnimatedNumber value={50} suffix="+" /></div>
                          <div className="stat-subtitle">
                            Different companies
                          </div>
                        </div>
                        <div className="icon-bottom">
                          <Image src={building} alt="Building" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
