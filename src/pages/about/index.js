import React from "react";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Section } from "../../components/Section";
import { Avatar } from "../../components/Avatar";

import styles from "./about.module.css";
import Member from "../../assets/john-schnobrich-FlPc9_VocJ4-unsplash.png";
import blogImg from "../../assets/blog.jpg";
import devImg from "../../assets/dev.jpg";
import designImg from "../../assets/design.jpg";

// TODO: Replace styles.part with a <Grid> and <Grid.Item> components
// TODO: Replace styles.team with <Grid> and <Grid.Item> components

const teamMembers = [
  {
    name: "John Doe",
    image: Member,
  },
  {
    name: "John Doe",
    image: Member,
  },
  {
    name: "John Doe",
    image: Member,
  },
  {
    name: "John Doe",
    image: Member,
  },
  {
    name: "John Doe",
    image: Member,
  },
];

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
        <h2>Meet the Backbone of Satriaana</h2>
        <div className={styles.team}>
          {teamMembers.map((member) => {
            return <Avatar image={member.image} name={member.name} />;
          })}
        </div>
      </Section>
    </DefaultLayout>
  );
};
