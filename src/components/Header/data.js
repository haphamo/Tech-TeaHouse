import {
  meetupOne,
  meetupTwo,
  womenInTechEight,
  womenInTechSeven,
  panelists,
  networkingEvent
} from "../../images"


// TAKE pageName PROP FROM LAYOUT.. COMPARE IT AGAINST data.pageName

const data = [
  {
    pageName: "landing-page",
    headerOneContent: "Tech Teahouse",
    headerTwoContent: "Greater Accessibility and Diversity in Tech",
    paragraphContent:
      "Our goal is to champion greater accessibility and diversity across the tech industry by empowering individuals through education and events.",
    buttonContent: "Become a Partner",
    image: womenInTechEight,
  },
  {
    pageName: "what-we-do",
    headerOneContent: "What We Do",
    headerTwoContent: "Greater Accessibility and Diversity in Tech",
    paragraphContent:
      "Our goal is to champion greater accessibility and diversity across the tech industry by empowering individuals through education and events.",
    image: networkingEvent,
  },
  {
    pageName: "who-we-are",
    headerOneContent: "We're Tech Teahouse",
    paragraphContent:
      "We are an inclusive tech community that cares for our members’ professional development. We connect members to upcoming tech events in the city.",
    image: meetupTwo,
  },
  {
    pageName: "sponsor-us",
    headerOneContent: "Partner with us",
    paragraphContent:
      "As a grassroots community organization, we are 100% funded by the generosity of corporate & community partners. Partnering with Tech Teahouse enables us to deliver free educational workshops to underrepresented groups, and powers programs that directly support greater diversity and collaboration within Toronto’s thriving tech sector. Become a partner and help us create a more diverse and inclusive tech community for all.",
    image: womenInTechSeven,
  },
  {
    pageName: "join-us",
    headerOneContent: "Come Join Us",
    paragraphContent:
      "Thank you for your interest in joining us and to build an inclusive Toronto tech community. Come join the conversation under our hashtag #TechTeahouse to stay up to date on new events and meetups near you. Let’s brew more diversi-tea together!",
      image: meetupOne
  },
]

export default data
