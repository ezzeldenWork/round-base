import { Col, Row, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import router from "next/router";
import styled from "styled-components";
import MyImage from "../img";
import { Container } from "./style";

const { Text } = Typography;

const AddressCard = () => {
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
              <Text className="header">{t("person:address")}</Text>
              <Row justify="space-between">
                <Col xs={{ span: 24 }}>
                  <Space direction="vertical" size={20} className="address-space">
                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("person:country")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> مصر </Text>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("person:state")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> الدقهلية </Text>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("person:street")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> قناة السويس </Text>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Col span={17}>
                        <Text className="text"> {t("person:buildingNum")} </Text>
                      </Col>
                      <Col span={7}>
                        <Text className="data"> 03 </Text>
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

export default AddressCard;
