import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {

  const pageData = data?.allWpPage?.edges?.[0]?.node?.homePage;

  const {
    homePageTitle,
    homeHeroPara,
    brainImage,
    aboutTitle,
    aboutPara,
    aboutDoctorImage,
    subTitle,
    clinicalFocusList,
    patientsChooseTitle,
    patientsChoosePara,
    patientsChooseList,
  } = pageData || {};

  const brainImgUrl = brainImage?.node?.mediaItemUrl;
  const brainImgAlt = brainImage?.node?.altText || "Brain image";

  const doctorImgUrl = aboutDoctorImage?.node?.mediaItemUrl;
  const doctorImgAlt = aboutDoctorImage?.node?.altText || "Dr Pavan Pai";

  return (
    <Layout>
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="container">
          <div className="left">
            <h1 dangerouslySetInnerHTML={{ __html: homePageTitle }} />
            <p dangerouslySetInnerHTML={{ __html: homeHeroPara }} />
            <div className="btn-wrap">
              <Link to="/contact" className="btn">Book an Appointment</Link>
            </div>
          </div>

          <div className="right">
            <div className="brain-wrapper">
              {brainImgUrl && (
                <img src={brainImgUrl} alt={brainImgAlt} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="about-section">
        <div className="container">
          <div className="left">
            <div className="img">
              {doctorImgUrl && (
                <img src={doctorImgUrl} alt={doctorImgAlt} />
              )}
            </div>
          </div>
          <div className="right">

            <span
              className="about-para"
              dangerouslySetInnerHTML={{ __html: aboutTitle }}
            />
            <p
              className="about-para"
              dangerouslySetInnerHTML={{ __html: aboutPara }}
            />
            <div className="btn-wrap">
              <Link to="/about" className="btn">Know More</Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── Clinical Focus + Patients Choose ── */}
      <section className="Clinical-Focus-wrapper">
        <div className="bg-img">
          <img src="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/bg-face.svg" alt="face bg" />
        </div>

        {/* Clinical Focus */}
        <div className="Clinical-Focus">
          <div className="container">
            <div className="left">
              <h2>Clinical Focus</h2>
              <span
                className="about-para"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
              <ul>
                {clinicalFocusList?.map((item, index) => (
                  <li key={index}>
                    <div className="img-wrap">
                      <img
                        src={item?.listImage?.node?.mediaItemUrl}
                        alt={item?.listImage?.node?.altText || item?.nameList}
                      />
                    </div>

                    <span
                      className="about-para"
                      dangerouslySetInnerHTML={{ __html: item?.nameList }}
                    />
                  </li>
                ))}
              </ul>
              <div className="btn-wrap">
                <Link to="/specialties" className="btn">Read More</Link>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>

        {/* Patients Choose */}
        <div className="Patients-Choose">
          <div className="container">
            <div className="left">
              <span
                className="about-para"
                dangerouslySetInnerHTML={{ __html: patientsChooseTitle }}
              />

              <span
                className="about-para"
                dangerouslySetInnerHTML={{ __html: patientsChoosePara }}
              />
              <ul>
                {patientsChooseList?.map((item, index) => (
                  <li key={index}>
                    <div className="img-wrap">
                      <img
                        src={item?.patientsImage?.node?.mediaItemUrl}
                        alt={item?.patientsImage?.node?.altText || item?.patientsList}
                      />
                    </div>
                    <span
                      className="about-para"
                      dangerouslySetInnerHTML={{ __html: item?.patientsList }}
                    />
                  </li>
                ))}
              </ul>
              <div className="btn-wrap">
                <Link to="/about" className="btn">Read More</Link>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
query MyQuery {
  allWpPage (filter: {databaseId: {eq: 8}}){
    edges {
      node {
        homePage {
          homeHeroPara
          homePageTitle
          brainImage {
            node {
              altText
              link
              mediaItemUrl
              gatsbyImage(width: 10, height: 10, placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          aboutTitle
          aboutPara
          aboutDoctorImage {
            node {
              altText
              link
              mediaItemUrl
              gatsbyImage(width: 10, height: 10, placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          subTitle
          clinicalFocusList {
            nameList
            listImage {
              node {
                altText
                mediaItemUrl
                mediaItemId
                slug
                uri
                title
              }
            }
          }
          patientsChooseTitle
          patientsChoosePara
          patientsChooseList{
            patientsList
            patientsImage{
               node {
                altText
                mediaItemUrl
                mediaItemId
                slug
                uri
                title
              }
            }
            
          }
        }
      }
    }
  }
}
`

export default IndexPage;