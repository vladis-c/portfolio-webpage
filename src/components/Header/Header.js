import Link from "next/link"
import React from "react"
import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillProject } from "react-icons/ai"
import { GiAbstract080 } from "react-icons/gi"

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles"

const Header = () => (
  <Container>
    <Div1>
      <Link href={"/"}>
        <a style={{ display: "flex", alignItems: "center", color: "wheat", marginBottom: "20px" }}>
          <GiAbstract080 size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/vladis-c">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vladislav26rus/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/vladis-c">
        <AiFillProject size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
