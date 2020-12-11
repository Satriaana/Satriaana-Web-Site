import React from "react";
import './team.css';

import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Section } from "../../components/Section";

import styles from "./about.module.css";
import blogImg from "../../assets/blog.jpg";
import devImg from "../../assets/dev.jpg";
import designImg from "../../assets/design.jpg";
import teamImg from "../../assets/satriaanacore.png";

export const About = () => {
  return (
    <DefaultLayout>
      <Section>
        <h1 style={{fontWeight: 'bold'}}>
        We Build the Future of Open Source
        </h1>
        <p>
        We are an independent and transparent open-source community and an organization that respects the privacy of people. <br/>We aim to filter open-source projects for authenticity, while helping other open-source volunteer startups to rise.
        </p>
        <h2 style={{paddingTop: '50px'}}>
          Our Teams
        </h2>
        <div className="row" style={{ paddingTop: '30px'}}>
            <div className="col-md-4">
              <div
                className="card"
                style={{ borderRadius: '10px', marginBottom: '30px' }}
              >
                <img
                  className="card-img w-100 d-block"
                  src={blogImg}
                  style={{
                    objectFit: 'cover',
                    height: '320px',
                    borderRadius: '10px',
                  }}
                />
                <div
                  className="card-img-overlay"
                  style={{
                    background:
                      'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat',
                    borderRadius: '10px',
                  }}
                >
                  <h4
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    Blog Team
                  </h4>
                </div>
              </div>
              <p style={{paddingBottom: '30px'}}>
              We need open minded out of the box thinkers with technical article writing skills. Come and join us to expand your horizons.
              </p>
            </div>

            <div className="col-md-4">
              <div
                className="card"
                style={{ borderRadius: '10px', marginBottom: '30px' }}
              >
                <img
                  className="card-img w-100 d-block"
                  src={devImg}
                  style={{
                    objectFit: 'cover',
                    height: '320px',
                    borderRadius: '10px',
                  }}
                />
                <div
                  className="card-img-overlay"
                  style={{
                    borderRadius: '10px',
                  }}
                >
                  <h4
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    Developing Team
                  </h4>
                </div>
              </div>
              <p style={{paddingBottom: '30px'}}>
              We are looking for enthusiastic Developers to join our team. If you have an interest in innovative technology and have the talent, this is the role for you.
              </p>
            </div>

            <div className="col-md-4">
              <div
                className="card"
                style={{ borderRadius: '10px', marginBottom: '30px' }}
              >
                <img
                  className="card-img w-100 d-block"
                  src={designImg}
                  style={{
                    objectFit: 'cover',
                    height: '320px',
                    borderRadius: '10px',
                  }}
                />
                <div
                  className="card-img-overlay"
                  style={{ borderRadius: '10px' }}
                >
                  <h4
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    Design Team
                  </h4>
                </div>
              </div>
              <p style={{paddingBottom: '30px'}}>
              If you are an individual with the passion for designing solutions that are simply amazing and game-changing, This will be your new home.
              </p>
            </div>
          </div>
      </Section>
      <Section hasBackgroundGradient>
        <div className={styles.part}>
          <h2>Our Vision</h2>
          <p>Unbiased transparency and privacy for everyone.</p>
        </div>
        <hr />
        <div className={styles.part}>
          <h2>Our Mission</h2>
          <p>
            To bequeath to the society, an independent and transparent open
            source community that questions the authenticity of open source
            projects and helps open source startups to rise, while being a
            platform where people can voice the issues they encounter in the
            technical world.
          </p>
        </div>
      </Section>
      <Section>
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="coreTeam">
              <h1 style={{fontWeight: 'bold'}}>Meet the Backbone of Satriaana</h1>
              <p>We are a group of individuals with a concern for how less private and proprietary the digital world is.</p>
              <p style={{fontWeight: 'bold', marginTop: '15px'}}>We strive to change that.</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img src={teamImg} alt="Core team of Satriaana" style={{width: '100%'}} />
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
};
