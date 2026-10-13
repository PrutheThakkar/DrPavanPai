import firstAidImage from "../images/blog_1_banner_does_swearing_count_as_first_aid_.webp"
import migrainesImage from "../images/blog_2_banner_why_migraines_seem_to_keep_office_hours_.webp"
import summerAfternoonImage from "../images/blog_3_banner_a_summer_afternoon_that_went_wrong.webp"
import heatwaveImage from "../images/blog_4_banner_running_through_a_heatwave_what_the_brain_wants_you_to_know.webp"

const blogImages = {
  "hello-world": firstAidImage,
  "does-swearing-count-as-first-aid": firstAidImage,
  "why-migraines-seem-to-keep-office-hours": migrainesImage,
  "a-summer-afternoon-that-went-wrong": summerAfternoonImage,
  "running-through-a-heatwave-what-the-brain-wants-you-to-know": heatwaveImage,
}

export const getBlogImage = post =>
  blogImages[post?.slug] || post?.featuredImage?.node?.mediaItemUrl
