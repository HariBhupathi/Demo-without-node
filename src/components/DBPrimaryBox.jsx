import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0498db; /* Black background */
  padding: 0px;
  width: 90vw;
  background-color: #051b41;
`;
const BlockBox = styled.div`
  background-color: #042069; #0c4a64;#003dfe; /* Green background */
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-family: sans-serif;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 5px;
`;

const BlockTitle = styled.span`
  font-weight: 900;
  margin-bottom: 5px;
  font-size: 1.05rem;
  color: #0099cc;
`;

const BlockSubTitle = styled.span`
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 0.95rem;
  color: #0099cc;
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
const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #03122d ; #051b41;
`;

const DBPrimaryBox = (props) => {
  const { boxes } = props;
  return (
    <Container>
      <BoxesContainer>
        {boxes.map((box) => (
          <>
            <BlockBox key={box.id}>
              <BlockTitle>{box.value}</BlockTitle>
              <BlockValue>{box.cost} </BlockValue>
              <BlockImage></BlockImage>
              <BlockSubTitle>{box.subTitle}</BlockSubTitle>
              <BlockValue>{box.subValue} </BlockValue>
            </BlockBox>
          </>
        ))}
      </BoxesContainer>
    </Container>
  );
};

export default DBPrimaryBox;
