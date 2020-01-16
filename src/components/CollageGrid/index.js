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
} from "./css"

import {
  womenInTechOne,
  eventOne,
  eventSix,
  bubbleTeaImg,
  eventSeven,
  eventThree,
  womenInTechSeven,
  womenInTechEight,
} from "../../images"

function CollageGrid() {
  return (
    <section>
      <BannerPic>
        <Img src={womenInTechEight} className="object-position" />
      </BannerPic>
      <Grid>
        <PicOne>
          <Img src={womenInTechOne} alt="Picture of Ruiting at an event" />
        </PicOne>
        <PicTwo>
          <Img src={eventOne} alt="The Tech Teahouse group at a Hackathon" />
        </PicTwo>
        <PicThree>
          <Img src={eventSix} />
        </PicThree>
        <PicFour>
          <Img src={bubbleTeaImg} className="position-bottom" />
        </PicFour>
        <PicFive>
          <Img src={eventSeven} />
        </PicFive>
        <PicSix>
          <Img src={eventThree} />
        </PicSix>
        <PicSeven>
          <Img src={womenInTechSeven} />
        </PicSeven>
      </Grid>
    </section>
  )
}

export default CollageGrid
