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

const InfoCard = ({ investorProfile }: Props) => {
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
              <Text className="header">{t("companyInfo")}</Text>
              <Row justify="space-between">
                <Col xs={{ span: 24 }}>
                  <Space direction="vertical" size={20} className="data-space">
                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text">
                          {" "}
                          {investorProfile ? t("investor:name") : t("companyName")}{" "}
                        </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> investor name </Text>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("companyNickname")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> Media </Text>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("investor:field")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> ميديا </Text>
                      </Col>
                    </Row>

                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("investor:companyActivity")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> نشاط الشركة </Text>
                      </Col>
                    </Row>

                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("investor:establishDate")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> تاريخ الانشاء </Text>
                      </Col>
                    </Row>

                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("investor:founders")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> المؤسيين </Text>
                      </Col>
                    </Row>

                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("investor:employeeNum")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> 10 - 100 </Text>
                      </Col>
                    </Row>

                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("investor:companyType")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> ربحية </Text>
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

export default InfoCard;
