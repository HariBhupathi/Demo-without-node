import React from "react";
import styled from "styled-components";
import SmallBarChart from "./SmallBarChart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0498db; /* Black background */
  padding: 0px;
  width: 90vw;
  height: 90%;
  margin-top: 5px;
  background-color: #051b41;
`;
const BlockBox = styled.div`
  background-color: #042069; #0c4a64;#003dfe; /* Green background */
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-family: sans-serif;
  width: 250px;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 5px;
`;
const Title = styled.span`
  font-weight: 900;
  margin-bottom: 5px;
  font-size: 2.05rem;
  color: #0099cc;
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
  background-color: #0099cc;
  border-radius: 5px;
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
  // align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height:80vh;
  background-color: #03122d ; #051b41;
`;

const BarChartContainer = styled.div`
  // display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top:1vh;
  border-radius:10px;
  padding-top:20px;
  flex-wrap: wrap;
  width: 100%;
  // height:80%;
  background-color: #03122d ; #051b41;
  align-items:center;
  margin-left:0px;
`;

const Speciality = (props) => {
  const { speciality } = props;
  return (
    <Container>
      <Title>Speciality</Title>
      <BoxesContainer>
        {speciality.map((box) => (
          <>
            <BlockBox key={box.id}>
              <BlockTitle>{box.value}</BlockTitle>
              <BlockSubTitle>{box.treated} Treated </BlockSubTitle>
              <BlockValue>{box.packages} Packages </BlockValue>
              <BlockImage>{/* <SmallBarChart /> */}</BlockImage>
              <BlockSubTitle>Last 12 months Summary</BlockSubTitle>

              <BarChartContainer>
                <SmallBarChart />
              </BarChartContainer>
            </BlockBox>
          </>
        ))}
      </BoxesContainer>
    </Container>
  );
};

export default Speciality;
