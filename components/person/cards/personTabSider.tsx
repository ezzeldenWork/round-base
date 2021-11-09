import { Menu } from "antd";
import useTranslation from "next-translate/useTranslation";

const PersonTabSider = () => {
  const { t } = useTranslation("person");
  return (
    <Menu  mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1"> <a href="#personInfo"> {t("personInfo")} </a> </Menu.Item>
      <Menu.Item key="2"> <a href="#contactInfo"> {t("contactInfo")} </a> </Menu.Item>
      <Menu.Item key="3"> <a href="#address"> {t("address")} </a> </Menu.Item>
    </Menu>
  );
};

export default PersonTabSider;
