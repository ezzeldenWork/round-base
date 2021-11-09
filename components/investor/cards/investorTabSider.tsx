import { Menu } from "antd";
import useTranslation from "next-translate/useTranslation";

const InvestorTabSider = () => {
  const { t } = useTranslation("investor");
  return (
    <Menu mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1"> <a href="#investorInfo"> {t("investorInfo")} </a> </Menu.Item>
      <Menu.Item key="2"> <a href="#cv"> {t("cv")} </a> </Menu.Item>
      <Menu.Item key="3"> <a href="#degree"> {t("degree")} </a> </Menu.Item>
      <Menu.Item key="4"> <a href="#contactInfo"> {t("person:contactInfo")} </a> </Menu.Item>
    </Menu>
  );
};

export default InvestorTabSider;
