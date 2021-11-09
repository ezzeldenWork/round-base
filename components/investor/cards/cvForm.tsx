import { Typography, Upload, message, Button, Space } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../../common/img";
import { AddInvestorContainer } from "../style";

const { Text } = Typography;
const CvForm = () => {
  const { t } = useTranslation("investor");

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <AddInvestorContainer>
      <div id="cv" className="user-card">
        <Text className="header"> {t("cv")} </Text>

        <Space
          direction="vertical"
          size={31}
          align="center"
          style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
          <MyImage src="/static/images/round-base/uploading_img.png" width={84} />
          <Upload {...props}>
            <Button type="primary"> {t("addCv")} </Button>
          </Upload>
        </Space>
      </div>
    </AddInvestorContainer>
  );
};
export default CvForm;
