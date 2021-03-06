import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImage from "../Assets/Avatarimage4.jpeg";
import AvatarImage2 from "../Assets/Avatarimage3.jpg";
function Projects() {
  return (
    <YourProject>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Logo design for bakery</Title>
          <SubTitle>1 day remaining</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage2} alt="" />
        </Avatar>
        <Detail>
          <Title>Personal branding project</Title>
          <SubTitle>5 day remaining</SubTitle>
        </Detail>
      </Project>
      <AllProjects>See all Projects</AllProjects>
    </YourProject>
  );
}

const YourProject = styled.div`
  height: 70%;
  background-color: whitesmoke;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  /* @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  } */
`;
const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4`
  font-weight: 500;
  /* @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  } */
`;
const SubTitle = styled.h5`
  font-weight: 300;
  color: ${themeColor};
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;
export default Projects;
