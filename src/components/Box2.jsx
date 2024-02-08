import React from "react";
import styled from "styled-components";

const BlockBox = styled.div`
  background-color: #003dfe; /* Green background */
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-family: sans-serif;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const BlockTitle = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1em;
`;

const BlockValue = styled.span`
  font-size: 1.5em;
`;

const BlockImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Box2 = () => {
  return (
    <BlockBox>
      <BlockTitle>Card Data</BlockTitle>
      <BlockValue>5.6Cr</BlockValue>
      <BlockImage></BlockImage>
      <BlockTitle>Households Covered</BlockTitle>
      <BlockValue>39.5 Lakhs</BlockValue>
    </BlockBox>
  );
};

export default Box2;
