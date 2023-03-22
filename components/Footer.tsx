import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Content>
      <Link href="/">문의사항</Link>
      <span style={{ margin: "0px 10px" }}>|</span>
      <Link href="/">Github</Link>
    </Content>
  );
};

export default Footer;

const Content = styled.footer`
  width: 100%;
  height: 80px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
