export const siteUrl = "https://drpavanpai.com"

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Pavan Pai",
  url: `${siteUrl}/`,
  medicalSpecialty: "Neurology",
  worksFor: { "@type": "Hospital", name: "Wockhardt Hospitals, Mira Road" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mira Road",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
}

export const pageSeo = {
  home: {
    title:
      "Dr. Pavan Pai | Neurologist & Neurointervention Specialist in Mira Road",
    description:
      "Dr. Pavan Pai is a neurologist and neurointervention specialist in Mira Road offering comprehensive neurological care, stroke treatment and minimally invasive neurointerventional procedures.",
    canonical: `${siteUrl}/`,
    keywords: [
      "neurologist in Mira Road",
      "neurologist Mira Road",
      "interventional neurologist Mira Road",
      "neurointervention specialist Mira Road",
      "stroke specialist Mira Road",
      "brain specialist Mira Road",
    ],
    schema: physicianSchema,
  },
  about: {
    title: "Dr. Pavan Pai | Interventional Neurologist in Mira Road",
    description:
      "Learn about Dr. Pavan Pai, an interventional neurologist with expertise in clinical neurology, acute stroke care and advanced neurovascular interventions.",
    canonical: `${siteUrl}/about/`,
    keywords: [
      "Dr. Pavan Pai",
      "interventional neurologist Mira Road",
      "neurologist Mira Road",
      "stroke specialist Mira Road",
      "neurovascular specialist Mumbai",
      "neurointervention specialist India",
    ],
    schema: physicianSchema,
  },
  specialties: {
    title: "Neurology Specialties | Dr. Pavan Pai | Mira Road",
    description:
      "Explore Dr. Pavan Pai's neurological specialties, including stroke, headache, epilepsy, movement disorders, vertigo, neuropathy, sleep disorders and neurorehabilitation.",
    canonical: `${siteUrl}/specialties/`,
    keywords: [
      "neurology specialist Mira Road",
      "neurologist Mira Road",
      "stroke specialist",
      "migraine specialist Mira Road",
      "epilepsy specialist Mira Road",
      "vertigo doctor Mira Road",
      "movement disorder specialist",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: "Neurology Specialties",
      url: `${siteUrl}/specialties/`,
      about: { "@type": "MedicalSpecialty", name: "Neurology" },
    },
  },
  blogs: {
    title: "Neurology & Brain Health Blogs | Dr. Pavan Pai",
    description:
      "Read insights from Dr. Pavan Pai on stroke, migraine, brain health, neurological emergencies and practical questions about the nervous system.",
    canonical: `${siteUrl}/blogs/`,
    keywords: [
      "neurology blog",
      "neurology blog India",
      "brain health articles",
      "stroke awareness",
      "migraine articles",
      "neurological health blog",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Neurology & Brain Health Blogs",
      url: `${siteUrl}/blogs/`,
    },
  },
  faq: {
    title: "Neurology & Stroke FAQs | Dr. Pavan Pai",
    description:
      "Answers to common questions about neurological symptoms, neurointervention, stroke treatment, investigations, prevention and rehabilitation.",
    canonical: `${siteUrl}/faq/`,
    keywords: [
      "neurology FAQs",
      "neurologist FAQs",
      "stroke FAQs",
      "neurointervention FAQs",
      "when to see a neurologist",
      "neurological symptoms",
    ],
  },
  contact: {
    title: "Contact Dr. Pavan Pai | Neurologist in Mira Road",
    description:
      "Request a consultation with Dr. Pavan Pai at Wockhardt Hospitals, Mira Road for neurological, stroke and neurointerventional care.",
    canonical: `${siteUrl}/contact/`,
    keywords: [
      "Dr. Pavan Pai appointment",
      "neurologist appointment Mira Road",
      "stroke specialist appointment",
      "interventional neurologist appointment",
      "neurointervention consultation",
      "neurologist consultation Mira Road",
    ],
    schema: physicianSchema,
  },
}

const blogSeoRows = [
  {
    match: "running through a heatwave",
    title: "Running Through a Heatwave: What the Brain Wants You to Know",
    description:
      "Explore how heat, hydration and physical exertion can affect the brain and nervous system, with practical insights from neurologist Dr. Pavan Pai.",
    keywords: [
      "heat and brain health",
      "heat stroke prevention",
      "dehydration brain health",
      "running in heat",
      "neurological effects of heat",
      "heatwave health tips",
    ],
  },
  {
    match: "a summer afternoon that went wrong",
    title: "A Summer Afternoon That Went Wrong | Dr. Pavan Pai",
    description:
      "Understand neurological warning signs that can emerge during a seemingly ordinary day and why timely medical attention can matter.",
    keywords: [
      "neurological emergency symptoms",
      "neurological emergency signs",
      "stroke warning signs",
      "sudden neurological symptoms",
      "when to see neurologist",
      "brain emergency",
    ],
  },
  {
    match: "why migraines seem to keep office hours",
    title: "Why Migraines Seem to Keep 'Office Hours' | Dr. Pavan Pai",
    description:
      "Learn why migraine attacks may appear around predictable times and how sleep, stress, routine and triggers can influence migraine patterns.",
    keywords: [
      "migraine triggers and timing",
      "migraine triggers",
      "migraine patterns",
      "migraine and stress",
      "migraine and sleep",
      "migraine specialist Mira Road",
    ],
  },
  {
    match: "does swearing count as first aid",
    title: "Does Swearing Count as First Aid? | Dr. Pavan Pai",
    description:
      "A practical, engaging look at what actually helps during a neurological emergency and what to do while waiting for medical care.",
    keywords: [
      "first aid for stroke",
      "stroke first aid",
      "what to do during stroke",
      "neurological emergency first aid",
      "stroke emergency Mumbai",
      "FAST stroke",
    ],
  },
]

const normalizeTitle = (title = "") =>
  title
    .replace(/<[^>]*>/g, "")
    .replace(/&#0*39;|&#x0*27;|&apos;|[‘’]/gi, "'")
    .toLowerCase()
    .trim()

export const getBlogSeo = ({
  title = "",
  slug = "",
  description = "",
  image,
}) => {
  const matched = blogSeoRows.find(({ match }) =>
    normalizeTitle(title).includes(match)
  )
  const cleanDescription = description
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  return {
    title: matched?.title || `${title} | Dr. Pavan Pai`,
    description:
      matched?.description ||
      cleanDescription.slice(0, 155) ||
      "Read neurological health insights from Dr. Pavan Pai.",
    canonical: `${siteUrl}/blog/${slug}/`,
    keywords: matched?.keywords || [],
    image,
    type: "article",
  }
}
