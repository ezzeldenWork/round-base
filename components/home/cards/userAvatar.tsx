import { Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../../common/img";
import { UserContainer } from "./style";

const { Text } = Typography;

const UserAvatar = () => {
  const { t } = useTranslation("home");
  return (
    <UserContainer>
      <div className="card">
        <Space size={16} align="start">
          <MyImage src="/static/images/round-base/avatar.svg" width={48} />
          <div className="info">
            <Text className="home_header"> Dariush Habibpour </Text>
            <Text className="user-job"> {t("founder")} </Text>
          </div>
        </Space>
      </div>
    </UserContainer>
  );
};

export default UserAvatar;
