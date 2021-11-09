import useTranslation from "next-translate/useTranslation";
import { Layout, Menu, Typography } from "antd";
import MyImage from "../../common/img";
import { SiderContainer } from "../style";

const { Text } = Typography;
const { Sider } = Layout;

const ProfileTabSider = () => {
  const { t } = useTranslation("profile");
  return (
    <Menu mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <a href="#info"> {t("basicInfo")} </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#password"> {t("changePass")} </a>
      </Menu.Item>
    </Menu>
  );
};

export default ProfileTabSider;
