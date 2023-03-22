import styled from "styled-components";
import { Timeline } from "react-twitter-widgets";

interface MainProps {
  twitterId: string;
}

const Twitter = ({ twitterId }: MainProps) => {
  return (
    <Contents>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: twitterId,
        }}
        options={{
          height: "900",
        }}
      />
    </Contents>
  );
};

export default Twitter;

const Contents = styled.div`
  width: 50%;
  margin-left: 50px;
`;
