import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const CenterSection = styled.div`
  flex: 1;
  text-align: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const TopNavbar = () => {
  return (
    <NavbarWrapper>
      <LeftSection>
        <Icon src="icon.png" alt="Icon" />
        <span>Your App</span>
      </LeftSection>
      <CenterSection>Your Text</CenterSection>
      <RightSection>
        <span>Hospitals</span>
        <span>Card Balance</span>
        <span>Helpline</span>
      </RightSection>
    </NavbarWrapper>
  );
};

export default TopNavbar;
