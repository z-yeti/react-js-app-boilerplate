import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const WelcomeDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 2em 0;
  flex-direction: column;
  align-items: center;
  background-color: #2d3234;
  color: #dbdfe1;
  text-align: center;
`;
const WelcomeTop = styled.div``;
const WelcomeText = styled.p`
  text-transform: uppercase;
  font-size: 2em;
  margin: 0.25em auto;
`;
const WelcomeBottom = styled.div``;
const IncludingList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  & li {
    position: relative;
    margin: 0.5em auto;
    &::before,
    &::after {
      content: '';
      position: absolute;
      border-top: 1px solid white;
      top: 10px;
      width: 5px;
    }
    &::before {
      right: 100%;
      margin-right: 15px;
    }
    &::after {
      left: 100%;
      margin-left: 15px;
    }
  }
`;
const IncludingText = styled.p`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

@inject('store')
@observer
class Welcome extends Component {
  render() {
    return (
      <WelcomeDiv>
        <WelcomeTop>
          <WelcomeText>Just another boilerplate</WelcomeText>
          <WelcomeText>Have Fun</WelcomeText>
          <WelcomeText>💩</WelcomeText>
        </WelcomeTop>
        <WelcomeBottom>
          <IncludingList>
            <IncludingText>Including:</IncludingText>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Express</li>
            <li>MobX</li>
            <li>Firebase</li>
            <li>Styled Components</li>
          </IncludingList>
        </WelcomeBottom>
      </WelcomeDiv>
    );
  }
}

export default Welcome;
