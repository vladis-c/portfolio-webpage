import React from "react"
import { AiFillGithub, AiFillProject, AiFillLinkedin } from "react-icons/ai"

import { SocialIcons } from "../Header/HeaderStyles"
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vladislav.cherkasheninov@gmail.com">
            vladislav.cherkasheninov@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/vladis-c">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/vladislav26rus/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/vladis-c">
            <AiFillProject size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
