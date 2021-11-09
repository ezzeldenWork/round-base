import { Row, Col, Table, Select, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import { Input, AutoComplete } from "antd";
import { InvestmentRequestContainer } from "../../../style";
import Link from "next/link";

const { Text } = Typography;
const { Option } = Select;

const InvestmentRequest = () => {
  const { t } = useTranslation("company");
  const options = [];

  const selectOpenCase = () => {
    return (
      <Select className="open" defaultValue={t("open")} dropdownMatchSelectWidth={90}>
        <Option value="jack">{t("open")}</Option>
        <Option value="lucy">{t("closed")}</Option>
      </Select>
    );
  };

  const selectCloseCase = () => {
    return (
      <Select className="close" defaultValue={t("closed")} dropdownMatchSelectWidth={90}>
        <Option value="jack">{t("open")}</Option>
        <Option value="lucy">{t("closed")}</Option>
      </Select>
    );
  };

  const columns = () => {
    const cols = [
      {
        title: t("project"),
        align: "center",
        dataIndex: "project",
        // render: (record) => <Link to={}>#{record.id}</Link>,
      },
      {
        title: t("coinvestors"),
        align: "center",
        dataIndex: "coinvestors",
        // render: (record) => <Link to={}>#{record.id}</Link>,
      },
      {
        title: t("currentInvestment"),
        align: "center",
        dataIndex: "currentInvestment",
        // render: (record) => <Link to={}>#{record.id}</Link>,
      },
      {
        title: t("advancedInvestors"),
        align: "center",
        dataIndex: "advancedInvestors",
        // render: (record) => <Link to={`/product/${record.id}`}>#{record.id}</Link>,
      },
      {
        title: t("investmentCase"),
        align: "center",
        dataIndex: "investmentCase",
        // render: (record) => <Link to={`/product/${record.id}`}>#{record.id}</Link>,
      },
    ];

    return cols;
  };

  const data = [
    {
      project: <Link href={`/singleInvestor`}>Home Smart</Link>,
      coinvestors: 56465,
      currentInvestment: `10000 ${t("egp")}`,
      advancedInvestors: 2345,
      investmentCase: selectOpenCase(),
    },
    {
      project: <Link href={`/singleInvestor`}>Home Smart</Link>,
      coinvestors: 56465,
      currentInvestment: `10000 ${t("egp")}`,
      advancedInvestors: 2345,
      investmentCase: selectCloseCase(),
    },
  ];
  return (
    <InvestmentRequestContainer>
      <Row gutter={[33, 33]}>
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
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
          <Table
            scroll={{ x: 1000 }}
            // loading={loading}
            rowKey={(record) => record.id}
            columns={columns()}
            size="small"
            bordered={false}
            dataSource={data}
            // onChange={handleTableChange}
            pagination={{
              // ...pagination,
              showSizeChanger: false,
              position: ["bottomCenter"],
              hideOnSinglePage: true,
            }}
            // position="center"
          />
        </Col>
      </Row>
    </InvestmentRequestContainer>
  );
};

export default InvestmentRequest;
