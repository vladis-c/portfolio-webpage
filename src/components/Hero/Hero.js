import React from "react"

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> to my portfolio
      </SectionTitle>
      <SectionText>
        I am an inspired currently studying future full-stack developer
      </SectionText>
      <Button onClick={() => window.location="https://github.com/vladis-c"}>GITHUB</Button>
    </LeftSection>
  </Section>
)

export default Hero
