import React from "react";
import styled from "styled-components";

const Button = styled.button`
color: #7A526D;
border: none;
background-color: #FAA0A0;
cursor: pointer;
`
const ButtonStop = styled.button`
color: #D22B2B;
border: none;
background-color: #FAA0A0	;
cursor: pointer;
`
const BoxButton = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const Container = styled.div`
width: 45%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Number = styled.h1`
width: 100%;
text-align: center;
`

export default class App extends React.Component {
  state = {
    number: 0
  };

  add = () => {
    const stopIt = setInterval(() => {
      this.setState({
        number: this.state.number < 100 ? this.state.number + 1 : this.state.num
      });
    }, 1000);

    this.stop = () => clearInterval(stopIt);
  };

  reset = () => {
    this.setState({
      number: 0
    });
  };

  render() {
    return (
      <Container>
        <Number> {this.state.number} </Number>
        <BoxButton>
        <Button onClick={this.add}>iniciar</Button>
        <ButtonStop onClick={this.stop}>parar</ButtonStop>
        <Button onClick={this.reset}>resetar</Button>
        </BoxButton>
      </Container>
    );
  }
}
