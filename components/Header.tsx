import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Link href="/">
          <h1>Film Table</h1>
        </Link>
        <p>로그인</p>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 80px;
  background: black;
  color: white;
`;

const Content = styled.div`
  width: 85%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
