import React from "react"

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles"

const acomplishmentsData = [
  { number: 5, text: "Projects on GitHub" },
  { number: "100+", text: "Hours of Self-Studies Online" },
  { number: "200+", text: "Hours Working on Code" },
  { number: 16, text: "Months in a Coding School are on the way" },
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
