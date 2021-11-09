import { Button, Space, Table, Typography, Pagination } from "antd";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import MyImage from "../../common/img";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import EditTableTheme from "./editTableTheme";

const { Text } = Typography;

const CompanyTable = () => {
  const { t, lang } = useTranslation("explore");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const companyDesc = () => {
    return (
      <Space size={12} align="start">
        <MyImage src="/static/images/round-base/explore_img_company.png" width={26} />
        <Text className="company-brand"> Massive Dynamic </Text>
      </Space>
    );
  };

  const modalButton = () => {
    return (
      <>
        <Button className="modal-btn" icon={<PlusOutlined />} onClick={showModal} />
        <EditTableTheme
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </>
    );
  };

  const columns = () => {
    const cols = [
      {
        title: t("companyRank"),
        dataIndex: "companyRank",
        key: "companyRank",
      },
      {
        title: t("common:company"),
        dataIndex: "company",
        key: "company",
      },
      {
        title: t("industry"),
        dataIndex: "industry",
        key: "industry",
      },
      {
        title: t("headLocation"),
        dataIndex: "headLocation",
        key: "headLocation",
      },
      {
        title: t("desc"),
        dataIndex: "desc",
        key: "desc",
      },
      {
        title: modalButton(),
        align: "center",
        dataIndex: "showModal",
        key: "showModal",
      },
    ];

    return cols;
  };

  const data = [
    {
      key: "1",
      companyRank: 1,
      company: companyDesc(),
      industry: t("survey:entertainment"),
      headLocation: t("survey:entertainment"),
      desc: t("survey:entertainment"),
    },
    {
      key: "2",
      companyRank: 2,
      company: companyDesc(),
      industry: t("survey:entertainment"),
      headLocation: t("survey:entertainment"),
      desc: t("survey:entertainment"),
    },
    {
      key: "3",
      companyRank: 3,
      company: companyDesc(),
      industry: t("survey:entertainment"),
      headLocation: t("survey:entertainment"),
      desc: t("survey:entertainment"),
    },
    {
      key: "4",
      companyRank: 4,
      company: companyDesc(),
      industry: t("survey:entertainment"),
      headLocation: t("survey:entertainment"),
      desc: t("survey:entertainment"),
    },
    {
      key: "5",
      companyRank: 5,
      company: companyDesc(),
      industry: t("survey:entertainment"),
      headLocation: t("survey:entertainment"),
      desc: t("survey:entertainment"),
    },
    {
      key: "6",
      companyRank: 6,
      company: companyDesc(),
      industry: t("survey:entertainment"),
      headLocation: t("survey:entertainment"),
      desc: t("survey:entertainment"),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  return (
    <>
      <Table
        scroll={{ x: 1000 }}
        rowKey={(record) => record.id}
        columns={columns()}
        rowSelection={{
          // type: selectionType,
          ...rowSelection,
        }}
        size="small"
        bordered={false}
        dataSource={data}
        // pagination={<Pagination   size="small"
        // total={50}
        // disabled
        // showTotal={showTotal}
        // showSizeChanger
        // showQuickJumper />}
        pagination={{
          showSizeChanger: false,
          position: [lang == "ar" ? "bottomLeft" : "bottomRight"],
          hideOnSinglePage: false,
        }}
      />
    </>
  );
};

export default CompanyTable;
