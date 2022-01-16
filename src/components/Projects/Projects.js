import React from "react"

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles"
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { projects } from "../../constants/constants"

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} alt="unavailable"/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TagList>
                {project.tags.map((tag, key) => (
                  <Tag key={key}>{tag}</Tag>
                ))}{" "}
              </TagList>
            </div>
          </TitleContent>
          <UtilityList>
            <ExternalLinks href={project.visit}>Code</ExternalLinks>
            <ExternalLinks href={project.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
)

export default Projects
