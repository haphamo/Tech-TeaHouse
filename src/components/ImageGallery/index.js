import React from "react"
import {
  Grid,
  PicOne,
  PicTwo,
  PicThree,
  PicFour,
  PicFive,
  PicSix,
  PicSeven,
  Img,
  BannerPic,
  SectionHeader,
} from "./css"

import {
  networkingEvent3,
  eventOne,
  panelist,
  bubbleTeaImg,
  eventSeven,
  eventThree,
  womenInTechSeven,
  womenInTechEight,
} from "../../images"

function ImageGallery() {
  return (
    <section>
      <SectionHeader> Tech Teahouse in Action</SectionHeader>
      <BannerPic>
        <Img src={womenInTechEight} />
      </BannerPic>
      <Grid>
        <PicOne>
          <Img src={networkingEvent3} alt="Picture of Ruiting at an event" />
        </PicOne>
        <PicTwo>
          <Img src={eventOne} alt="The Tech Teahouse group at a Hackathon" />
        </PicTwo>
        <PicThree>
          <Img
            src={panelist}
            alt="picture of Mel with Victoria"
          />
        </PicThree>
        <PicFour>
          <Img
            src={bubbleTeaImg}
            className="position-bottom"
            alt="The Tech and Tea group doing a group photo at a bubble tea shop"
          />
        </PicFour>
        <PicFive>
          <Img
            src={eventSeven}
            alt="Two of the tech and tea folks at a Hackathon"
          />
        </PicFive>
        <PicSix>
          <Img
            src={eventThree}
            alt="Jen, Ruiting and company on the Elevate stage posing for the camera."
          />
        </PicSix>
        <PicSeven>
          <Img
            src={womenInTechSeven}
            alt="Some  of the tech and tea group sitting on a table together smiling for the camera."
          />
        </PicSeven>
      </Grid>
    </section>
  )
}

export default ImageGallery
