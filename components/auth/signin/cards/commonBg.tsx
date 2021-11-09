import styled from "styled-components";
import { Breakpoints } from "../../../../constants";
import MyImage from "../../../common/img";

const CommonBg = () => {
  return (
    <Container>
      <div className="img-bg">
        <div className="overImg">
          <MyImage src="/static/images/round-base/signin-img.svg" width={"100%"} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  left: ${(props) => (props.theme.lang == "ar" ? "0" : "unset")};
  right: ${(props) => (props.theme.lang == "en" ? "0" : "unset")};
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${Breakpoints.xl}) {
    width: 38%;
  }
  @media (max-width: ${Breakpoints.lg}) {
    display: none;
  }
  .overImg {
    .ant-image {
      width: 480px !important;
      @media (max-width: ${Breakpoints.xl}) {
        width: 300px !important;
      }
    }
  }
`;

export default CommonBg;
