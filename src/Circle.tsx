import styled from "styled-components";

const Container = styled.div``;

interface CircleProps {
  //object shape을 설명
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
