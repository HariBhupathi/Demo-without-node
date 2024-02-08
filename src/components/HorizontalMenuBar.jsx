import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #051b41;
  color: white;
  padding: 10px;
`;

const Logo = styled.img`
  width: 50px; /* Adjust the width as needed *
  background: transparent;
  border-radius: 10%; /* You can adjust the pixel value based on your preference */
  background-color: #fff0f0;
  padding: -20px;
`;

const Quote = styled.span`
  margin-bottom: 5px;
  font-size: 1.3em;
  text-align: right;
  margin-left: 30%;
`;

const TabbedMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  background-color: transparent;
`;
const HospitalsText = styled.p`
  margin-right: auto;
  color: white;
  margin-left: 2vw;
`;

const Tab = styled.div`
  padding: 10px;
  background-color: ${({ isActive }) => (isActive ? "lightblue" : "blue")};
  color: ${({ isActive }) => (isActive ? "black" : "white")};
  text-align: center;
  cursor: pointer;
  margin-left: 5px; /* Add margin between tabs */
  margin-right: 0.5vw;
`;

const MenuBar = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <TabbedMenu>
        <Logo src="YSRLogo.jpeg" alt="Logo" />
        <Quote>“Aarogyasri for transformative health Care & Reforms</Quote>
        <HospitalsText></HospitalsText>
        <div style={{ display: "flex", marginLeft: "auto" }}>
          <Tab
            isActive={activeTab === "All"}
            onClick={() => handleTabClick("All")}
          >
            {" "}
            Hospitals
          </Tab>
          <Tab
            isActive={activeTab === "Government"}
            onClick={() => handleTabClick("Government")}
          >
            Card Balance
          </Tab>
          <Tab
            isActive={activeTab === "Private"}
            onClick={() => handleTabClick("Private")}
          >
            Helpline:112
          </Tab>
        </div>
      </TabbedMenu>
    </Container>
  );
};

export default MenuBar;
