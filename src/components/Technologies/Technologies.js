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
      I am using frontend technologies in my projects. <br />
      I touched some backend and databases during my short coder career path.{" "}
      <br />
      At the moment I am a student in online school, and there is coming more to
      learn like cloud services, toolkits and databases.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            JavaScript <br />
            TypeScript <br />
            React.js <br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Node.js <br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Services</ListTitle>
          <ListParagraph>Studies are ongoing</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
