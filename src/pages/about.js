import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout-new"
import InsideBanner from "../components/Inside-Banner"
import pageBanner from "../images/about_page_banner.webp"
import aboutDrBg from "../images/about-page-dr-img.png"
import SeoMeta from "../components/SeoMeta"
import { pageSeo } from "../data/seo"
const AboutPage = ({ data }) => {
  const pageData = data?.allWpPage?.edges?.[0]?.node?.homePage

  const { aboutTitle, aboutPara, aboutDoctorImage } = pageData || {}

  const doctorImgUrl = aboutDoctorImage?.node?.mediaItemUrl
  const doctorImgAlt = aboutDoctorImage?.node?.altText || "Dr. Pavan Pai"

  useEffect(() => {
    if (typeof document === "undefined") return

    document.body.classList.add("inside-page")

    return () => {
      document.body.classList.remove("inside-page")
    }
  }, [])

  return (
    <Layout>
      <InsideBanner
        desktopImage={pageBanner}
        mobileImage={pageBanner}
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
              <img src={aboutDrBg} alt="Dr. Pavan Pai" loading="lazy" />
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
                Neurological conditions can affect movement, memory, speech, sensation and everyday activities. Some develop gradually, while others, such as stroke, require urgent medical assessment. Understanding the symptoms, medical history and clinical findings helps guide the next steps in evaluation and treatment.
              </p>

              <p>
               Dr. Pavan Pai is an Interventional Neurologist at Wockhardt Hospitals, Mira Road, where he has been practising since 2020. His clinical practice includes the evaluation and management of neurological conditions, along with neurointerventional procedures for selected disorders affecting the brain and its blood vessels. Care may involve medication, minimally invasive procedures or a combination of approaches, depending on the condition and the patient's clinical needs.
              </p>

              <p>
               Following his training in Neurology, Dr. Pai completed a two-year post-doctoral fellowship in Neurointerventions. His procedural training includes mechanical thrombectomy for acute ischaemic stroke, carotid artery stenting, aneurysm coiling, arteriovenous malformation (AVM) embolisation, flow diversion and cerebral angiography. These procedures may be considered for specific neurovascular conditions following clinical assessment. The choice of treatment depends on factors such as the diagnosis, severity of the condition, timing and individual medical circumstances.
              </p>
              <p>
                Alongside neurointerventional care, Dr. Pai evaluates and manages a range of neurological conditions, including stroke, epilepsy, headaches, vertigo, movement disorders, dementia, neuromuscular conditions, peripheral neuropathies and neuroimmunological disorders. Consultations involve reviewing symptoms and medical history, considering investigations where indicated, and discussing suitable treatment options. Patients and their families can also discuss follow-up care, rehabilitation needs and coordination with other specialties where appropriate.
              </p>
              <p>
                Acute stroke management is an important part of Dr. Pai's clinical practice. Stroke symptoms require urgent medical attention, as timely assessment helps determine which treatments may be appropriate. Treatment decisions depend on the type of stroke, the time since symptoms began, investigation findings and the patient's overall condition.
              </p>
              <p>Outside his clinical practice, Dr. Pai is an avid marathon runner. Distance running involves preparation, consistency and patience, qualities that also form part of his personal approach to everyday life.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

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
`

export default AboutPage

export const Head = () => <SeoMeta {...pageSeo.about} />
