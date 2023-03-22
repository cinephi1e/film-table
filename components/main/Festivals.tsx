import styled from "styled-components";
import { P } from "./Main";
import { useRouter } from "next/router";
import { useState } from "react";

interface MainProps {
  lists: object[];
  setTwitterId: React.Dispatch<React.SetStateAction<string>>;
}

const Festivals = ({ lists, setTwitterId }: MainProps) => {
  const router = useRouter();
  const [category, setCategory] = useState("");

  const TwitterHandler = (name: string) => {
    if (name === "전주국제영화제") {
      setTwitterId("JEONJU_IFF");
    }
    if (name === "부천판타스틱영화제") {
      setTwitterId("BiFanOfficial");
    }
    if (name === "제천국제음악영화제") {
      setTwitterId("jimfflove");
    }
    if (name === "부산국제영화제") {
      setTwitterId("busanfilmfest");
    }
  };

  const openHomepage = (link: string) => {
    window.open(link, "_blank");
  };

  const moveTimeTable = (name: string) => {
    router.push("time-table");
    setCategory(name);
  };

  return (
    <div>
      {lists.map((item: any) => (
        <Festival key={item.link} onClick={() => TwitterHandler(item.name)}>
          <h1>
            {item.count}회 {item.name}
          </h1>
          <h3>{item.period}</h3>
          <P>{item.desc}</P>
          <Homepage onClick={() => openHomepage(item.link)}>
            공식 홈페이지
          </Homepage>
          <TimeTableBtn onClick={() => moveTimeTable(item.name)}>
            시간표 바로가기
          </TimeTableBtn>
        </Festival>
      ))}
    </div>
  );
};

export default Festivals;

const Festival = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  border-bottom: 1px solid;
  cursor: pointer;
  &:hover {
    background: #fafafa;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Homepage = styled.span`
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  &:hover {
    text-decoration: underline;
  }
`;

const TimeTableBtn = styled.button`
  background: black;
  color: white;
  font-size: 17px;
  padding: 10px;
  width: 140px;
  cursor: pointer;
  margin-top: 10px;
`;
