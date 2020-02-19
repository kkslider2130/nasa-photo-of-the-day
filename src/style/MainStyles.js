import styled from "styled-components";

const MainDiv = styled.div`
  background-color: rgb(212, 197, 197);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainImg = styled.img`
  height: 80%;
  width: 80%;
  margin-top: 2rem;
`;

const ContentPara = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-family: "Poppins";
  padding: 2rem;
  background-color: white;
`;

export default MainDiv;
export { MainImg, ContentPara };
