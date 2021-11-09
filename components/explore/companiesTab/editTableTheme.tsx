import { Modal, Space, Menu, Input, Typography, Checkbox, Button } from "antd";
import useTranslation from "next-translate/useTranslation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Text } = Typography;

const EditTableTheme = ({ handleOk, handleCancel, isModalVisible }) => {
  const { t, lang } = useTranslation("explore");

  const cols = [
    {
      text: t("companies"),
      icon:
        lang == "ar" ? (
          <LeftOutlined style={{ color: "#2E5DB7" }} />
        ) : (
          <RightOutlined style={{ color: "#2E5DB7" }} />
        ),
    },
    {
      text: t("investors"),
      icon:
        lang == "ar" ? (
          <LeftOutlined style={{ color: "#2E5DB7" }} />
        ) : (
          <RightOutlined style={{ color: "#2E5DB7" }} />
        ),
    },
    {
      text: t("people"),
      icon:
        lang == "ar" ? (
          <LeftOutlined style={{ color: "#2E5DB7" }} />
        ) : (
          <RightOutlined style={{ color: "#2E5DB7" }} />
        ),
    },
  ];

  const checkData = [
    {
      text: t("companyRank"),
    },
    {
      text: t("company:company"),
    },
    {
      text: t("industry"),
    },
    {
      text: t("headLocation"),
    },
    {
      text: t("desc"),
    },
  ];

  return (
    <Modal
      title={t("editTheme")}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      centered={true}
      footer={false}
      className="edit_theme"
    >
      <Input.Search size="large" placeholder={t("common:search")} enterButton />
      <Space
        className="theme-space"
        size={32}
        style={{ marginTop: 32, marginBottom: 45, width: "100%" }}
      >
        <div className="choose-col">
          {cols.map((col, index) => (
            <div className="col" key={index}>
              <Text> {col.text} </Text>
              {col.icon}
            </div>
          ))}
        </div>
        <div className="check">
          <Text> {t("chooseColumn")} </Text>
          {checkData.map((data, index) => (
            <Checkbox key={index}>{data.text}</Checkbox>
          ))}
        </div>
      </Space>
      <div className="btn">
        <Button type="primary" onClick={handleCancel}>
          {t("recommend:save")}
        </Button>
      </div>
    </Modal>
  );
};

export default EditTableTheme;
