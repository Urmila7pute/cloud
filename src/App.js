import logo from "./img/logo.svg";
import homeImage from "./img/hero-img.png";
import awsiconlogo from "./img/awsLogo.svg";
import cloudLogo from "./img/cloudLogo.svg";
import kuberneteslogo from "./img/kubernetes.svg";
import vcloudLogo from "./img/vcloud.svg";
import jupyterLogo from "./img/jupyter.svg";
import polarsquadLogo from "./img/polarsquad.svg";
import double_check from "./img/double_check.jpg";
import { caseStudy, servicesData, testimonialData } from "./data/data";
import migrationService from "./img/migration-service.png";
import cicdService from "./img/ci-cd-services.png";
import automateService from "./img/automate-services.png";
import manageCloudService from "./img/managed-cloud-services.png";
import dataService from "./img/data-services.png";
import cognizant from "./img/cognizant.png";
import fabric from "./img/fabric_logo.png";
import fromation from "./img/formation_logo.png";
import itopia from "./img/itopia_logo.png";
import jainam from "./img/jainam_logo.jpeg";
import krista from "./img/kristasoft_logo.png";
import plottown from "./img/plottown_logo.png";
import topGroup from "./img/topgroup_logo.png";
import avatar from "./img/avatar1.jpeg";
import quoteLeft from "./img/quote-alt-left-svgrepo-com.svg";
import quoteRight from "./img/quote-alt-right.svg";

import "./App.css";
import "./css/index.css";
import {
  AUTOMATEALLTHETHINGS,
  CICD,
  DATASERVICES,
  MANAGECLOUDSERVICES,
  MIGRATION,
} from "./data/constants";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Icon } from '@iconify/react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <nav className="nav-bar">
        <div className="logoSection">
          <img className="logo" src={logo} alt="logo" />
          <span className="logo-name">RegelCloud</span>
        </div>
        <ul className="nav-list">
          <li>
            <a href="home"> Home</a>
          </li>
          <li>
            <a href="whyus">Why Us</a>
          </li>
          <li>
            <a href="stats"> Stats</a>
          </li>
          <li>
            <a href="services"> Services</a>
          </li>
          <li>
            <a href="testimonials"> Testimonials</a>
          </li>
          <li>
            <a href="casestudies"> Case studies</a>
          </li>
          <li>
            <a href="Contact"> Contact</a>
          </li>
          <li>
            <div className="nav-blue-btn">
              <a href="" className="free-quote-btn">
                Free Quote
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <section className="home">
        <div className="homeContainer">
          <div className="homecontainer-firstHalf" data-aos="fade-up" data-aos-duration="3000">
            <h1 className="home-heading">
              Your guiding star in the multi-cloud-verse
            </h1>
            <h2 className="home-subheading">
              We are team of talanted cloud experts
            </h2>
            <div className="blue-btn">
              <a className="first-link" href="">
                Get Started
              </a>
            </div>
          </div>
          <div className="homecontainer-secondHalf" data-aos="fade-left" data-aos-duration="3000">
            <img src={homeImage} alt="home image" />
          </div>
        </div>
      </section>
      <div className="home-logoes">
        <div>
          <img src={awsiconlogo} className="homelogoes-img" data-aos="zoom-in"/>
        </div>
        <div>
          <img src={cloudLogo} className="homelogoes-img" data-aos="zoom-in"/>
        </div>
        <div>
          <img src={kuberneteslogo} className="homelogoes-img" data-aos="zoom-in"/>
        </div>
        <div>
          <img src={vcloudLogo} className="homelogoes-img" data-aos="zoom-in"/>
        </div>
        <div>
          <img src={jupyterLogo} className="homelogoes-img" data-aos="zoom-in"/>
        </div>
        <div>
          <img src={polarsquadLogo} className="homelogoes-img" data-aos="zoom-in"/>
        </div>
      </div>
      <section className="why-us">
        <div className="why-us-header" data-aos="fade-up" data-aos-duration="3000">
          <h2>Partner with the cloud experts</h2>
        </div>
        <div className="why-us-content">
          <ul className="home" data-aos="fade-up" data-aos-duration="3000">
            <li className="why-us-list">
              <img src={double_check} className="double_check-img" />
              <p className="why-us-list-paragraph">
                Whether you’re venturing into the public cloud for the first
                time, or you’re a born-in-the-cloud veteran, let us take care of
                your cloud needs. We've got your back(end).
              </p>
            </li>
            <li className="why-us-list">
              <img src={double_check} className="double_check-img" />
              <p className="why-us-list-paragraph">
                Whatever your infrastructure goals - decomposing a monolith into
                a containerized micro-service architecture, cloud-hopping to
                save costs, or even building a new full-stack app from scratch -
                we can help.
              </p>
            </li>
            <li className="why-us-list">
              <img src={double_check} className="double_check-img" />
              <p className="why-us-list-paragraph">
                We're open-source geeks who live and breathe the cloud to build
                awesome solutions for our clients. As a boutique DevOps software
                shop with extensive industry experience, we leverage the power
                of the public cloud to help democratize technology.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="why-us">
        <div className="why-us-header" data-aos="fade-up" data-aos-duration="3000">
          <h2>OUR CUSTOMERS GET RESULTS</h2>
        </div>
        <div className="statContainer">
          <div className="statSection">
            <div className="statPersentage">33%</div>
            <div className="statText">Cloud Bill</div>
          </div>
          <div className="statSection">
            <div className="statPersentage">99.99%</div>
            <div className="statText">System Uptime</div>
          </div>
          <div className="statSection">
            <div className="statPersentage">25%</div>
            <div className="statText">Time to Market</div>
          </div>
        </div>
      </section>
      <section className="why-us">
        <div className="why-us-header" data-aos="fade-up" data-aos-duration="3000">
          <h2>OUR SERVICES</h2>
        </div>
        <div className="home">
          <ul>
            {servicesData.map((ele, index) => {
              return (
                <li className="services-list" data-aos={index % 2 === 0?"fade-right":"fade-left"} data-aos-duration="3000">
                  <div className="services-firstHalf">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="services-title">{ele.title}</h3>
                        <span className="services-subtitle">
                          {ele.subTitle}
                        </span>
                        <div className="services-containt">{ele.content}</div>
                        <div className="services-containt">
                          {ele?.secondContent}
                        </div>
                      </>
                    ) : (
                      <img
                        src={
                          ele.title === MIGRATION
                            ? migrationService
                            : ele.title === CICD
                            ? cicdService
                            : ele.title === AUTOMATEALLTHETHINGS
                            ? automateService
                            : ele.title === MANAGECLOUDSERVICES
                            ? manageCloudService
                            : ele.title === DATASERVICES
                            ? dataService
                            : ""
                        }
                        alt="services-image"
                        className="services-image"
                      />
                    )}
                  </div>
                  <div className="services-secondHalf">
                    {index % 2 === 0 ? (
                      <img
                        src={
                          ele.title === MIGRATION
                            ? migrationService
                            : ele.title === CICD
                            ? cicdService
                            : ele.title === AUTOMATEALLTHETHINGS
                            ? automateService
                            : ele.title === MANAGECLOUDSERVICES
                            ? manageCloudService
                            : ele.title === DATASERVICES
                            ? dataService
                            : ""
                        }
                        alt="services-image"
                        className="services-image"
                      />
                    ) : (
                      <>
                        <h3 className="services-title">{ele.title}</h3>
                        <span className="services-subtitle">
                          {ele.subTitle}
                        </span>
                        <div className="services-containt">{ele.content}</div>
                        <div className="services-containt">
                          {ele?.secondContent}
                        </div>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="why-us">
        <div className="why-us-header" data-aos="fade-up" data-aos-duration="3000">
          <h2>BUSINESSES TRUST US</h2>
        </div>
        <div className="home">
          <img src={cognizant} className="business-trust-img" data-aos="zoom-in" data-aos-duration="3000"/>
          <img src={fabric} className="business-trust-img" data-aos="zoom-in" data-aos-duration="3000"/>
          <img src={fromation} className="business-trust-img" data-aos="zoom-in" data-aos-duration="3000"/>
          <img src={itopia} className="business-trust-img" data-aos="zoom-in" data-aos-duration="3000"/>
          <img src={jainam} className="business-trust-img" data-aos="zoom-in" data-aos-duration="3000"/>
          <img src={krista} className="business-trust-img" data-aos="zoom-in" data-aos-duration="3000"/>
          <img src={plottown} className="business-trust-img" data-aos="zoom-in" data-aos-duration="3000"/>
          <img src={topGroup} className="business-trust-img" data-aos="zoom-in" data-aos-duration="3000"/>
        </div>
      </section>
      <section className="testimonials">
        <div className="why-us-header" data-aos="fade-up" data-aos-duration="3000">
          <h2>OUR CUSTOMERS ARE SAYING</h2>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          autoplay={true}
          items={2}
          slideBy={1}
        >
          {testimonialData.map((ele) => {
            return (
          <div className={"testimonial-wrap"} data-aos="fade-up" data-aos-duration="3000">
                <div  className={"testimonial-item"}>
                  <img
                    src={avatar}
                    alt={"profile"}
                    className={"testimonial-img"}
                  />
                  <h3 className={"testimonial-h3"}>{ele.name}</h3>
                  <h4 className={"testimonial-h4"}>{ele.companyName}</h4>
                  <p className={"testimonial-p"}>{ele.companyTitle}</p>
                  <p className={"testimonial-p"}>
                    <img
                      src={quoteLeft}
                      alt={"profile"}
                      className={"testimonial-p-image"}
                    />
                    {ele.description}
                    <img
                      src={quoteRight}
                      alt={"profile"}
                      className={"testimonial-p-image"}
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </section>
      <section className="why-us">
        <div className="why-us-header" data-aos="fade-up" data-aos-duration="3000">
          <h2>CASE STUDY</h2>
        </div>
        <div className={"caseStudy-main"} data-aos="fade-up" data-aos-duration="3000">
        {caseStudy.map((ele) => {
            return (
          <div className={"caseStudy-wrap"} data-aos="fade-up" data-aos-duration="3000">
                <div className={"caseStudy-item"}>
                  <div className={"caseStudy-icon"}>
                  <Icon icon="bx:tachometer" />
                  </div>
                  <h4 className={"caseStudy-h4"}>{ele.title}</h4>
                  <p className={"caseStudy-p"}>{ele.description}</p>
                </div>
               </div>
            );
          })}
          </div>
        </section>
        {/* <section className="why-us">
        <div className="why-us-header" data-aos="fade-up" data-aos-duration="3000">
          <h2>READY TO GROW YOUR BUSINESS?</h2>
        </div>
        <div className="readyToGrowBusiness">
          <div className="companyInfo">
          <h3 className="readyToGrowBusiness-title">Regel Cloud</h3>
                        <span className="readyToGrowBusiness-subtitle">
                        Leveraging the power and scale of the public cloud to help democratize technology. Open-source geeks who live and breathe the cloud to build awesome solutions for our clients.
                        </span>
                        <div className={"caseStudy-icon"}>
                  <Icon icon="bx:tachometer" />
                  </div>
          </div>
          <div className="companyAddress"></div>
          <div className="quote"></div>
        </div>
        </section> */}
       
    </div>
  );
}

export default App;
