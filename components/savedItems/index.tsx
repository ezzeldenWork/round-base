import { Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import RecommendCards from "../common/recommendCards";
import { RecommendContainer } from "../recommendations/style";

const { Text } = Typography;

const ItemSaved = () => {
  const { t } = useTranslation("home");
  const isSaved = true;
  return(
    <RecommendContainer>
    <div className="row-container">
      <Space direction="vertical" size={32}>
        <Text className="header"> {t("savedItems")} </Text>
        <RecommendCards savedItems = {isSaved} />
      </Space>
    </div>
  </RecommendContainer>
  )
}

export default ItemSaved;