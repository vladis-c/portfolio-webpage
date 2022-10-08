import React from "react"

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles"

const acomplishmentsData = [
  { number: 2, text: "Major Applications" },
  { number: "200+", text: "Hours of Self-Studies Online" },
  { number: "∞", text: "Hours Working on Code" },
  { number: 6, text: "Months in a Coding Academy" },
]

const Acomplishments = () => (
  <Section>
    <SectionDivider/> <br />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {acomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
