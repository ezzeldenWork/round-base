import { Col, Row, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import router from "next/router";
import styled from "styled-components";
import MyImage from "../img";
import { Container } from "./style";

const { Text } = Typography;

type Props = {
  investorProfile?: boolean;
};

const ContactCard = ({ investorProfile }: Props) => {
  const { t } = useTranslation("company");
  return (
    <Container>
      <div className="info">
        <div className="edit">
          <MyImage onClick={() => router.push("/addCompany")} src="/static/images/round-base/edit-line.svg" width={"auto"} />
        </div>
        <Row justify="space-between" align="top" gutter={[0, 21]}>
          <Col xs={{ span: 24 }}>
            <Space
              direction="vertical"
              style={{ width: "100%", justifyContent: "space-between" }}>
              <Text className="header">{t("person:contactInfo")}</Text>
              <Row justify="space-between">
                <Col xs={{ span: 24 }}>
                  <Space direction="vertical" size={20} className="contact-sapce">
                    {!investorProfile && (
                      <>
                        <Row justify="space-between">
                          <Col span={14}>
                            <Text className="text"> {t("login:email")} </Text>
                          </Col>
                          <Col span={10}>
                            <Text className="data"> admin@gmail.com </Text>
                          </Col>
                        </Row>

                        <Row justify="space-between">
                          <Col span={14}>
                            <Text className="text"> {t("login:phoneNumber")} </Text>
                          </Col>
                          <Col span={10}>
                            <Text className="data"> 1234568 </Text>
                          </Col>
                        </Row>
                      </>
                    )}

                    <Row justify="space-between">
                      <Col span={14}>
                        <Text className="text"> {t("website")} </Text>
                      </Col>
                      <Col span={10}>
                        <Text className="data"> www.mediafire.com </Text>
                      </Col>
                    </Row>

                    <Row justify="space-between">
                      <Col span={14}>
                        <Text className="text"> {t("facebook")} </Text>
                      </Col>
                      <Col span={10}>
                        <Text className="data"> www.facebook.com/mediafire </Text>
                      </Col>
                    </Row>

                    <Row justify="space-between">
                      <Col span={14}>
                        <Text className="text"> {t("twitter")} </Text>
                      </Col>
                      <Col span={10}>
                        <Text className="data"> www.twitter.com/mediafire </Text>
                      </Col>
                    </Row>

                    <Row justify="space-between">
                      <Col span={14}>
                        <Text className="text"> {t("linkedin")} </Text>
                      </Col>
                      <Col span={10}>
                        <Text className="data"> www.linkedin.com/mediafire </Text>
                      </Col>
                    </Row>
                  </Space>
                </Col>
              </Row>
            </Space>
          </Col>
          <Col md={{ span: 1 }} xs={{ span: 3 }}>
            {/* <div className="edit">
              <MyImage src="/static/images/round-base/edit-line.svg" width={"auto"} />
            </div> */}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ContactCard;
