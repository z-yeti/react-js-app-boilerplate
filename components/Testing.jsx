import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const TestingDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 2em 0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #dbdfe1;
  color: #2d3234;
`;
const TestingTitle = styled.p`
  text-transform: uppercase;
  font-size: 2em;
`;
const TextSpan = styled.span`
  color: #016197;
  & span {
    font-size: 0.5em;
  }
`;
const TestingList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  & li {
    margin: 0.5em auto;
  }
`;

@inject('store')
@observer
class Testing extends Component {
  render() {
    return (
      <TestingDiv>
        <TestingTitle>Proof Shit Works</TestingTitle>
        <TestingList>
          <li>
            .env: <TextSpan>{process.env.TEST}</TextSpan>
          </li>
          <li>
            MobX Store: <TextSpan>{this.props.store.test}</TextSpan>
          </li>
          <li>
            Styled Components:{' '}
            <TextSpan>
              works
              <span>(obviously)</span>
            </TextSpan>
          </li>
        </TestingList>
      </TestingDiv>
    );
  }
}

export default Testing;
