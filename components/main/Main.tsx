import styled from "styled-components";
import Twitter from "./Twitter";
import Festivals from "./Festivals";
import { useState } from "react";

const Main = () => {
  const [twitterId, setTwitterId] = useState("JEONJU_IFF");

  const lists = [
    {
      name: "전주국제영화제",
      period: "2022. 04. 28. (목) ~ 2022. 05. 07. (토)",
      count: 23,
      desc: "동시대 영화 예술의 대안적 흐름, 독립, 예술영화의 최전선에 놓인 작품들을 소개하는 부분경쟁을 도입한 비경쟁 영화제",
      link: "https://www.jeonjufest.kr/",
      twitter: "JEONJU_IFF",
    },
    {
      name: "부천판타스틱영화제",
      period: "2022. 07. 07. (목) ~ 2022. 07. 17. (일)",
      count: 26,
      desc: "아시아 최대·최고의 장르 영화제",
      link: "http://www.bifan.kr/",
      twitter: "BiFanOfficial",
    },
    {
      name: "제천국제음악영화제",
      period: "2022. 08. 11. (목) ~ 2022. 08. 16. (화)",
      count: 18,
      desc: "영화와 음악을 동시에 즐기는 국내 최초 음악 영화제",
      link: "https://www.jimff.org/kor/default.asp",
      twitter: "jimfflove",
    },
    {
      name: "부산국제영화제",
      period: "2022. 10. 05. (수) ~ 2022. 10. 14. (금)",
      count: 27,
      desc: "아시아를 대표하는 영화제",
      link: "https://www.biff.kr/kor/",
      twitter: "busanfilmfest",
    },
  ];

  return (
    <Container>
      <Intro>
        <h1>시네필에 의한, 시네필을 위한.</h1>
        <P>Film Table은 영화제 일정을 간편하게 짜기 위해 제작되었습니다.</P>
        <P>여러분의 피드백은 보다 나은 서비스를 제공하는 데 큰 힘이 됩니다.</P>
      </Intro>
      <Contents>
        <Festivals lists={lists} setTwitterId={setTwitterId} />
        <Twitter twitterId={twitterId} />
      </Contents>
    </Container>
  );
};

export default Main;

export const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin: 80px auto;
  margin-bottom: 100px;
`;

const Contents = styled.div`
  display: flex;
`;

const Intro = styled.div`
  margin-bottom: 30px;
`;

export const P = styled.p`
  margin: 5px 0;
  font-size: 18px;
`;
