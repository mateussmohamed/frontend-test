import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 50px 0;
`;

const Line = styled.hr`
  border-color: #e8e7ef;
`;

const Text = styled.span`
  position: absolute;
  left: 50%;
  top: -10px;
  margin-left: -20px;
  background-color: white;
  font-size: 16px;
  padding: 0 8px;
`;

function Divider() {
  return (
    <Container>
      <Line />
      <Text>OU</Text>
    </Container>
  );
}
export default Divider;
