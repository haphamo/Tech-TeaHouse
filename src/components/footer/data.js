import uuidv4 from "uuid"

import insta from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin2.svg"

export const socialMedia = [
  {
    id: uuidv4(),
    icon: linkedin,
    linkTo: "https://www.linkedin.com/company/techteahouse/",
    ariaLabel: "Visit Tech Teahouse linked in page",
  },
  {
    id: uuidv4(),
    icon: twitter,
    linkTo: "https://twitter.com/TechTeahouse",
    ariaLabel: "Visit Tech Teahouse twitter page",
  },
  {
    id: uuidv4(),
    icon: insta,
    linkTo: "https://www.linkedin.com/company/techteahouse/",
    ariaLabel: "Visit Tech Teahouse instagram page",
  },
]
