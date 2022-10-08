import React from "react"
import { DiAws, DiFirebase, DiNodejs, DiReact, DiZend } from "react-icons/di"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles"

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work with different kind of technologies. <br />
      Front-end is my major, but I implemented a lot of stuff using backend,
      databases and cloud.
      <br />
      At the moment I am a Juniour Software Developer, I learn new stack
      everyday and am about to launch my own courses of coding on topics that
      were complicated to me.
      <br />
      I work with systems like Stripe, Agora, Finnish Trust Network,
      Voucherify, Twilio.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            TypeScript, JavaScript <br />
            React Native <br />
            React <br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend, Cloud</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express.js <br />
            Firebase <br />
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>DevOps, Tools</ListTitle>
          <ListParagraph>
            GitHub <br />
            Vercel <br />
            Expo and EAS <br />
            Redux, Redux Saga, Redux Persist <br />
            Devtools <br />
            Jest <br />
            JUnit <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
