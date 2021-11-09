import { Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import RecommendCards from "../common/recommendCards";
import { RecommendContainer } from "./style";

const { Text } = Typography;

const Recommendations = () => {
  const { t } = useTranslation("recommend");
  return (
    <RecommendContainer>
      <div className="row-container">
        <Space direction="vertical" size={32}>
          <Text className="header"> {t("recommend")} </Text>
          <RecommendCards />
        </Space>
      </div>
    </RecommendContainer>
  );
};

export default Recommendations;
