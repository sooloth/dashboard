import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";
function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>In top 20%</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>32</Digit>
            <InfoContainer>
              <Title>Projects</Title>
              <SubTitle>10 This month</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="Mobile App" glow />
            <Badge content="banding" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 10rem;
  background-color: blue;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  /* @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  } */
`;
const Card = styled.div`
  background-color: rgba(20, 194, 243, 0.9);
  border-radius: 0.9rem;
  margin: 0.1rem;
`;
const CardContent = styled.div`
  padding: 0.1rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
  ${({ justify }) =>
    justify &&
    `
  justify-content:space-around;
  width:90%;
  `}
`;
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h4`
  color: black;
`;
const SubTitle = styled.h5`
  color: blanchedalmond;
  font-weight: normal;
`;
export default Info;
