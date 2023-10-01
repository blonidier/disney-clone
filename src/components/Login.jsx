import styled from "styled-components";
import React from 'react';

const Login = () => {
    return (
        <Container>
              <BgImage />
            <Content>
            <CTA>
              <CTALogoOne src="/images/images/cta-logo-one.svg" alt=""/>
              <SignUpButton>GET IT ALL THERE</SignUpButton>
              <Description>Get Premier Access to Raya and the Last Dragon fir ab additional fee with a Disney+ subscription. As of 3/26/23, the price of Disney+ and The Disney Bundle will increase by $1</Description>
              <CTALogoTwo src="/images/images/cta-logo-two.png" alt=""/>
            </CTA>
            </Content>
        </Container>
    );
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`
const Content = styled.div`
margin-bottom: 3vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`

const BgImage = styled.div`
height: 100vh;
background-image: url("/images/images/login-background.jpg");
z-index: -1;
position: absolute;
right: 0;
left: 0;
background-size: cover;
`

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2vw;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;

  @media (max-width: 768px){
    width: 80vw;
    margin: 0 auto;
  }
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  width: 100%;
`
const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 80%;
`

const SignUpButton = styled.button`
  background-color: #0063e5;
  color: #f9f9f9;
  width: 600px;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 1rem;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  @media (max-width: 768px){
    width: 80vw;
    margin: 0 auto;
  }

  &:hover { background-color: #0483ee;}
`
const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5em;
letter-spacing: 1.5px;
`

export default Login;