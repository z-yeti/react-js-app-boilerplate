import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const DivOne = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2d3234;
  color: #dbdfe1;
  font-size: 3em;
`;
const DivTwo = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #dbdfe1;
  color: #2d3234;
`;
const TextOne = styled.p`
  text-transform: uppercase;
`;
const TextTwo = styled.p``;
const TextSpan = styled.span`
  color: #016197;
`;

@inject('store')
@observer
class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <DivOne>
          <TextOne>This is just a basic boilerplate</TextOne>
          <TextOne>💩</TextOne>
          <TextOne>Have Fun</TextOne>
        </DivOne>
        <DivTwo>
          <TextTwo>
            .env: <TextSpan>{process.env.TEST}</TextSpan>
          </TextTwo>
          <TextTwo>
            MobX Store: <TextSpan>{this.props.store.test}</TextSpan>
          </TextTwo>
          <TextTwo>
            Styled Components: <TextSpan>works</TextSpan>
          </TextTwo>
        </DivTwo>
      </Fragment>
    );
  }
}

export default IndexPage;
