import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="./images/cta-logo-one.svg" />

        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Once you recharge with ₹1499 or ₹4199 plan, you will receive a unique
          Disney+ Hotstar Premium coupon code in your MyJio account.
        </Description>
        <CTALogoTwo src="./images/cta-logo-two.png" alt=""></CTALogoTwo>
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    opacity: 0.7;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
