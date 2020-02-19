import styled from "styled-components";

const FooterDiv = styled.footer`
  display: flex;
  background-color: black;
  height: 14vh;
  align-items: center;
`;

const FooterCr = styled.div`
  color: white;
  width: 70%;
  margin-left: 18rem;
  font-family: "Oswald";
  @media (max-width: 1000px) {
    margin-left: 10rem;
  }
}
@media (max-width: 800px) {
    margin-left: 5rem;
  }
}
@media (max-width: 690px) {
    width: 50%;
    margin-left: 6rem;
  }
`;

export default FooterDiv;
export { FooterCr };
