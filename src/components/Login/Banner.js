import React from 'react'
import styled from 'styled-components';

import ctaOne from '../../images/cta-logo-one.svg'
import ctaTwo from '../../images/cta-logo-two.png'
import bgLogin from '../../images/login-background.jpg'

function Banner() {
    return (
    <>
        <Container>
        <CTA>
          <CTALogoOne src={ctaOne} />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
            The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src={ctaTwo} />
        </CTA>
      </Container>
    </>
    )
}

export default Banner



const Container = styled.div`
  position: relative;
  /* height: calc(100vh - 70px); */
  height: 95vh;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${bgLogin});
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
  }

  @media screen and (min-witdh: 768px) and (max-width: 1200px) {
    height: 85vh;
  }
  @media screen and (min-witdh: 280px) and (max-width: 767px) {
    height: 75vh;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;

  @media screen and (min-witdh: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }
  @media screen and (min-witdh: 550px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }
  @media screen and (min-witdh: 375px) and (max-width: 550px) {
    max-width: 350px;
    margin-top: 13vh;
  }
  @media screen and (min-witdh: 280px) and (max-width: 375px) {
    max-width: auto;
    margin-top: 13vh;
  }
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
    background: #0483ee;
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
