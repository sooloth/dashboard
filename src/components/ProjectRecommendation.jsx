import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImage from "../Assets/avatar.jpg";
function ProjectRecommendation() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>Johnny Manderson</InfoName>
              <InfoUpdate>Updated 2m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Design" />
        </Detail>
        <Title>Need a design from branding essentials for my business</Title>
        <ProjectInfo>hi we go hey you are crazy man oh my boy </ProjectInfo>
        <PriceContainer>
          <Price>$87.000/month</Price>
          <Badge content="Full Time" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 130%;
  padding: 1rem;
  background-color: white;
  width: 29.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  /* @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  } */
`;
const CardContent = styled.div`
  margin: 0.4rem;
`;
const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  } */
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 2rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: #3b3b3b;
  margin-bottom: 0.5rem;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 1rem;
  padding: 0.3rem 0.3rem;
  border-radius: 1rem;
  background-color: rgba(156, 16, 255, 0.3);
  /* @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.4rem;
  } */
`;
const Title = styled.h5`
  font-weight: 500;
  color: blueviolet;
`;
const Price = styled.div``;
export default ProjectRecommendation;
