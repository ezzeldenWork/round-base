import { Col, Row, Typography } from "antd";
import { useState } from "react";
import AuthNavbar from "./cards/authNavbar";
import CommonBg from "./cards/commonBg";
import ForgetPassword from "./cards/forgetPassword";
import { AuthContainer } from "./style";
import VerficationCode from "./cards/verficationCode";
import SignAuth from "./cards/signAuth";
import ChangePassword from "./cards/changePassword";
import LanguageChanger from "../../layout/header/accountmenu/languageChanger";

const { Text } = Typography;

const SignIn = () => {
  const [type, setType] = useState("signin");

  const types = () => {
    switch (type) {
      case "forgetPass":
        return <ForgetPassword setType={setType} />;
      case "securityCode":
        return <VerficationCode setType={setType} />;

      case "changePassword":
        return <ChangePassword setType={setType} />;

      default:
        return <SignAuth setType={setType} />;
    }
  };

  return (
    <AuthContainer>
      <CommonBg />
      <div className="row-container">
        <Row align="middle" justify="space-between">
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <div className="card-form">
              <div className="navbar">
                <AuthNavbar />
              </div>
              {types()}
              <div className="lang_changer">
                <LanguageChanger />
              </div>
            </div>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 0 }} />
        </Row>
      </div>
    </AuthContainer>
  );
};

export default SignIn;
