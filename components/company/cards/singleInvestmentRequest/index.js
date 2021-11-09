import {
  Button,
  Col,
  Row,
  Space,
  Switch,
  Typography,
  Input,
  AutoComplete,
  Table,
  Select,
} from "antd";
import useTranslation from "next-translate/useTranslation";
import { SingleContainer } from "./style";
import { RightOutlined, LeftOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import router from "next/router";
import Link from "next/link";
import { useState } from "react";

const { Text } = Typography;

const SingleInvestmentRequest = () => {
  const { t, lang } = useTranslation("company");
  const [isopen, setIsOpen] = useState(false);
  const options = [];

  const btns = () => {
    return (
      <Space size={24}>
        <Button type="link" className="accept" icon={<CheckOutlined />}>
          {t("accept")}
        </Button>
        <Button type="link" className="refuse" icon={<CloseOutlined />}>
          {t("refuse")}
        </Button>
      </Space>
    );
  };

  const columns = () => {
    const cols = [
      {
        title: t("investor:investor"),
        dataIndex: "project",
        width: "33%",
      },
      {
        title: t("investor:investValue"),
        align: "center",
        dataIndex: "coinvestors",
        width: "33%",
      },
      {
        align: "center",
        dataIndex: "currentInvestment",
        width: "33%",
      },
    ];

    return cols;
  };

  const data = [
    {
      project: <Link href={`/singleInvestor`}>user name</Link>,
      coinvestors: 56465,
      currentInvestment: btns(),
    },
    {
      project: <Link href={`/singleInvestor`}>user name</Link>,
      coinvestors: 56465,
      currentInvestment: btns(),
    },
    {
      project: <Link href={`/singleInvestor`}>user name</Link>,
      coinvestors: 56465,
      currentInvestment: btns(),
    },
    {
      project: <Link href={`/singleInvestor`}>user name</Link>,
      coinvestors: 56465,
      currentInvestment: btns(),
    },
    {
      project: <Link href={`/singleInvestor`}>user name</Link>,
      coinvestors: 56465,
      currentInvestment: btns(),
    },
    {
      project: <Link href={`/singleInvestor`}>user name</Link>,
      coinvestors: 56465,
      currentInvestment: btns(),
    },
  ];

  return (
    <SingleContainer>
      <div className="row-container">
        <Row justify="space-between" gutter={[0, 25]}>
          <Col span={24}>
            <Button
              icon={lang == "ar" ? <RightOutlined /> : <LeftOutlined />}
              onClick={() => router.push("company")}
              className="back"
              type="link">
              {t("investorRequest")}
            </Button>
          </Col>
          <Col sm={{ span: 12 }} xs={{ span: 24 }}>
            <Text className="invest-name"> Home Smart </Text>
          </Col>
          <Col sm={{ span: 12 }} xs={{ span: 24 }}>
            <Space className="switch-space" size={80}>
              <Text className="switch-text"> {!isopen ? t("openInvest") : t("closeInvest")} </Text>
              <Switch onChange={() => setIsOpen(!isopen)} />
            </Space>
          </Col>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <AutoComplete
              dropdownMatchSelectWidth={252}
              className="search-input"
              style={{
                width: "100%",
              }}
              options={options}>
              <Input.Search size="large" placeholder={t("common:search")} enterButton />
            </AutoComplete>
          </Col>
          <Col span={24}>
            <div className="table">
              <Table
                scroll={{ x: 1000 }}
                rowKey={(record) => record.id}
                columns={columns()}
                size="small"
                bordered={false}
                dataSource={data}
                pagination={{
                  showSizeChanger: false,
                  position: ["bottomCenter"],
                  hideOnSinglePage: true,
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </SingleContainer>
  );
};

export default SingleInvestmentRequest;
