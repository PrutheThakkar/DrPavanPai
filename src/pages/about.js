import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout-new";
import InsideBanner from "../components/Inside-Banner";
import aboutDrBg from "../images/about-page-dr-img.png";
const AboutPage = ({ data }) => {
  const pageData = data?.allWpPage?.edges?.[0]?.node?.homePage;

  const { aboutTitle, aboutPara, aboutDoctorImage } = pageData || {};

  const doctorImgUrl = aboutDoctorImage?.node?.mediaItemUrl;
  const doctorImgAlt = aboutDoctorImage?.node?.altText || "Dr. Pavan Pai";

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.classList.add("inside-page");

    return () => {
      document.body.classList.remove("inside-page");
    };
  }, []);

  return (
    <Layout>
      <InsideBanner
        desktopImage="https://app.drpavanpai.com/wp-content/uploads/2026/06/about_page_banner.webp"
        mobileImage="https://app.drpavanpai.com/wp-content/uploads/2026/06/about_page_banner.webp"
        alt="About page banner"
        width={1440}
        height={500}
      />

      <div className="container">

        <div className="about-page-title-wrap">
          <h1>About Dr. Pavan Pai</h1>
          <p>
            Advancing neurological care through expertise, precision, and trust
          </p>
        </div>
      </div>

      <section className="about-section about-page">
        <div className="container">


          <div className="left">
            <div className="img">
              <img
                src={aboutDrBg}
                alt="Dr. Pavan Pai"
                loading="lazy"
              />
            </div>
          </div>
          <div className="right">

            <div className="doctor-info">
              <h2>Dr. Pavan Pai</h2>
              <p>
                MBBS | DNB Medicine | DNB Neurology
                <br />
                Fellowship in Neurovascular Interventions
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="about-page-main">
        <div className="container">

          <div className="about-content-wrap">
            <div className="about-text">
              <p>
                Neurological conditions often present with uncertainty. Symptoms may be subtle, progress gradually over time, or require urgent medical attention. Effective neurological care begins with understanding these symptoms in the right context, arriving at an accurate diagnosis, and developing a treatment plan that is tailored to the individual rather than the condition alone.
              </p>

              <p>
                Dr. Pavan Pai is an Interventional Neurologist at Wockhardt Hospitals, Mira Road, where he has been practicing since 2020. His expertise spans both comprehensive clinical neurology and advanced neurovascular interventions, allowing patients to access medical, procedural, and long-term neurological care under one roof. This integrated approach ensures continuity across diagnosis, treatment, recovery, and follow-up, particularly for patients with complex neurological and neurovascular conditions.
              </p>

              <p>
                After completing his specialised training in Neurology, Dr. Pai pursued a two-year post-doctoral Fellowship in Neurointerventions. He is trained in advanced minimally invasive procedures used in the treatment of stroke and neurovascular disorders, including mechanical thrombectomy for acute ischemic stroke, carotid artery stenting, aneurysm coiling, AVM embolisation, flow diversion, and cerebral angiography. These procedures play a critical role in restoring blood flow, preventing neurological damage, and improving outcomes in time-sensitive neurological emergencies.
              </p>
              <p>
                Alongside his interventional practice, Dr. Pai conducts a dedicated General Neurology clinic, managing a broad spectrum of neurological conditions including stroke, epilepsy, headaches, vertigo, movement disorders, dementia, neuromuscular disorders, peripheral neuropathies, neuroimmunological disorders, sleep disorders, and neurorehabilitation needs. His clinical philosophy is rooted in careful evaluation, evidence-based treatment, and clear communication, helping patients and families understand their diagnosis and treatment options with confidence. A key area of interest is acute stroke management. Given the time-critical nature of stroke treatment, Dr. Pai remains actively involved in emergency stroke care, ensuring rapid assessment and access to advanced interventions whenever required. His commitment to timely decision-making and precision-driven care reflects a simple belief: neurological treatment should be accurate, evidence-based, and easy for patients to navigate.</p>
              <p>Outside of medicine, Dr. Pai is an avid marathon runner. The discipline, consistency, and preparation that endurance sports demand mirror many of the principles that underpin neurological care, where meaningful progress is often built through patience, persistence, and attention to detail.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    allWpPage(filter: { databaseId: { eq: 8 } }) {
      edges {
        node {
          homePage {
            brainImage {
              node {
                altText
                mediaItemUrl
              }
            }
            aboutTitle
            aboutPara
            aboutDoctorImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;