import Layout from "@/components/Layout";
import { Container } from "@/components/main/Main";
import styled from "styled-components";

const TimeTable = () => {
  return (
    <Layout>
      <Container>
        <Info>
          <h1>상영 시간표</h1>
          <div>
            <SearchBox placeholder="영화 제목으로 찾기" />
            <SearchBtn>검색</SearchBtn>
            <Select>
              <option key="biff" value="biff">
                부산국제영화제
              </option>
              <option key="bifan" value="bifan">
                부천판타스틱영화제
              </option>
              <option key="JEONJU_IFF" value="JEONJU_IFF">
                전주국제영화제
              </option>
              <option key="jimff" value="jimff">
                제천국제음악영화제
              </option>
            </Select>
          </div>
        </Info>
        <Table>
          <Day>
            <Date>10/04(목)</Date>
            <Lists>
              <MovieInfo>
                <p style={{ marginRight: "10px" }}>10:00 - 12:00</p>
                <p style={{ fontWeight: "bold" }}>미래의 범죄들</p>
                <Rating>19</Rating>
                <Theater>영화의 전당 야외극장</Theater>
                <Section>아이콘</Section>
              </MovieInfo>
              <MovieInfo>
                <p style={{ marginRight: "10px" }}>10:00 - 12:00</p>
                <p style={{ fontWeight: "bold" }}>미래의 범죄들</p>
                <Rating>19</Rating>
                <Theater>영화의 전당 야외극장</Theater>
                <Section>아이콘</Section>
                <GV>GV</GV>
              </MovieInfo>
              <MovieInfo>
                <p style={{ marginRight: "10px" }}>10:00 - 12:00</p>
                <p style={{ fontWeight: "bold" }}>미래의 범죄들</p>
                <Rating>19</Rating>
                <Theater>영화의 전당 야외극장</Theater>
                <Section>아이콘</Section>
              </MovieInfo>
              <MovieInfo>
                <p style={{ marginRight: "10px" }}>10:00 - 12:00</p>
                <p style={{ fontWeight: "bold" }}>미래의 범죄들</p>
                <Rating>19</Rating>
                <Theater>영화의 전당 야외극장</Theater>
                <Section>아이콘</Section>
              </MovieInfo>
            </Lists>
          </Day>
          <Day>
            <Date>10/05(금)</Date>
            <Lists>
              <MovieInfo>
                <p style={{ marginRight: "10px" }}>10:00 - 12:00</p>
                <p style={{ fontWeight: "bold" }}>미래의 범죄들</p>
                <Rating>19</Rating>
                <Theater>영화의 전당 야외극장</Theater>
                <Section>아이콘</Section>
              </MovieInfo>
              <MovieInfo>
                <p style={{ marginRight: "10px" }}>10:00 - 12:00</p>
                <p style={{ fontWeight: "bold" }}>미래의 범죄들</p>
                <Rating>19</Rating>
                <Theater>영화의 전당 야외극장</Theater>
                <Section>아이콘</Section>
                <GV>GV</GV>
              </MovieInfo>
            </Lists>
          </Day>
        </Table>
      </Container>
    </Layout>
  );
};

export default TimeTable;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchBox = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 5px;
  font-size: 16px;
  margin-right: 10px;
  border-width: 0 0 1px 0;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  width: 60px;
  height: 40px;
  padding: 0 5px;
  font-size: 16px;
  margin-right: 10px;
  background: black;
  color: white;
  border: none;
  cursour: pointer;
`;

const Select = styled.select`
  width: 170px;
  height: 40px;
  padding: 0 5px;
  font-size: 16px;
`;

const Table = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  width: 100%;
`;

const Day = styled.div`
  display: flex;
  border-bottom: 1px solid;
  &:last-child {
    border: none;
  }
`;

const Date = styled.div`
  width: 125px;
  border-right: 1px solid;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;

const Rating = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-left: 3px;
`;

const Theater = styled.span`
  padding: 5px;
  background: #eee;
  color: grey;
  border-radius: 3px;
  font-size: 12px;
  margin-left: 10px;
`;

const Section = styled.span`
  padding: 5px;
  background: #e0f1db;
  color: grey;
  border-radius: 3px;
  font-size: 12px;
  margin-left: 10px;
`;

const GV = styled.span`
  padding: 5px;
  background: #3045ff;
  color: white;
  border-radius: 3px;
  font-size: 12px;
  margin-left: 10px;
`;
