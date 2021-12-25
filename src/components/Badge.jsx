import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils";

function badge({
  content,
  clean = false,
  glow = false,
  paid = false,
  late = false,
}) {
  return (
    <Div glow={glow} paid={paid} late={late} clean={clean}>
      {content}
    </Div>
  );
}

const Div = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
  ${({ glow }) =>
    glow &&
    `
font-size:0.8rem;
padding:0.2rem 0.5rem;
font-weight:normal;
color:#2f233e;
background-color:#70e00041;

`}
  ${({ clean }) =>
    clean &&
    `
border:0.05rem solid ${themeColor};
color:${themeColor};
background-color:transparent;

`}
  ${({ paid }) =>
    paid &&
    `

background-color:#70e00041;
color:#70e000;
`}
  ${({ late }) =>
    late &&
    `

background-color:#ff595e41;
color:#ff595e;
`}
`;

export default badge;
