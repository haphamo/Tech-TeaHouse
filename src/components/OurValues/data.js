import inclusivityImg from '../../../src/images/22-web_essential-512.png'
import communityImg from '../../../src/images/iconfinder_05-web_essential_3401825.svg'
import developmentImg from '../../../src/images/iconfinder_27-web_essential_3401845.svg'
import personImg from '../../../src/images/iconfinder_44-web_essential_3401862.svg'
import chartImg from '../../../src/images/iconfinder_chart_graph_analytics_sales_pie_chart-pie_graph-pie_4831043.svg'
import starImg from '../../../src/images/iconfinder_03-web_essential_3401827.svg'
import youthImg from '../../../src/images/iconfinder_06-web_essential_3401824.svg'
import careerImg from '../../../src/images/iconfinder_31-web_essential_3401849.svg'
import communityBuilding from '../../../src/images/iconfinder_14-web_essential_3401832.svg'
import twitter from '../../../src/images/Twitter_Icon.png'
import instagram from '../../../src/images/Instagram_Icon.png'
import linkedIn from '../../../src/images/LinkedIn_Icon.png'



// 5 objects in array for the different pages

const data = [
  { pageName: 'landing-page',
    headerOne: 'Our Values',
    headerTwo: 'An Inclusive Toronto-based Tech Community',
    icons: [{ src: inclusivityImg,
              headline: 'Inclusivity',
              desc: "We are an inclusive tech community that cares for our member's professional development." },
            { src: communityImg,
              headline: 'Community',
              desc: 'We connect members to upcoming tech events in the city.' },
            { src: developmentImg,
              headline: 'Development',
              desc: 'We organize workshops to empower members for their professional development.' }],
  },
  {
    pageName: 'what-we-do',
    headerOne: 'Building a More Inclusive Tech Community',
    body: 'Tech Teahouse is building a more diverse and inclusive tech community in Toronto by increasing access to tech-focused events, providing a forum to foster meaningful connections, and hosting free tech skills workshops for underrepresented groups. Some of our initiatives include:',
    icons: [{initiatives: 'Tech teahouse workshop series'},
            {initiatives: 'Community Forum'},
            {initiatives: 'Regular memeber meetups'},
            {initiatives: 'Event notifications'},
            {initiatives: 'Networking hub'},
            {initiatives: 'Hackathon team building'}]
  },
  {
    pageName: 'who-we-are',
    headerOne: 'Our Community',
    body: 'Our members are reflective of the diverse backgrounds and experiences that comprise of the communities where we work and live. Our vision is to build and grow an inclusive Toronto tech community where members are given the opportunity for professional development.',
    icons: [{ 
              src: personImg,
              headerTwo: '87% identify as Person of Color'
            },
            { src: chartImg,
              headerTwo: '52% are women in Tech'
            },
            { src: starImg,
              headerTwo: '200+ members'
            }]
  },
  {
    pageName: 'sponsor-us',
    headerOne: 'Our Impact',
    body: 'We believe that investing in our local Toronto Tech community fosters innovation and we want to make professional development opportunities accessible. Therefore all contributions made will go directly to the following goals:',
    icons: [{
              src: youthImg,
              headerTwo: 'Youth Workshops',
              body: 'Host a tech skills workshop for youth of underrperesented groups.'
            },
            { src: careerImg,
              headerTwo: 'Career Development',
              body: 'Our professional workshops offers attendees insight and knowledge on topics to that will help them advance their careers.'
            },
            { src: communityBuilding,
              headerTwo: 'Community Building',
              body: 'We aim to build our community and double the number of Tech Teahouse active members by 2020.'
            }]
  },
  {
    pageName: 'get-in-touch',
    
    icons: [{
              src: linkedIn,
              headerTwo: 'LinkedIn',
              body: 'Be part of our network at /company/techteahouse/',
            },
            {
              src: twitter,
              headerTwo: 'Twitter',
              body: 'Follow us @TechTeahouse and share your opinion with #TechTeahouse'
            },
            {
              src: instagram,
              headerTwo: 'Instagram',
              body: 'Follow and tag us @TechTeahouse'
            }]
  }
]



export { data } 