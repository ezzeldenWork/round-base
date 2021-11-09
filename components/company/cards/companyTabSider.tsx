import { Menu } from "antd";
import useTranslation from "next-translate/useTranslation";
import { CompanyContainer } from "../style";

const CompanyTabSider = () => {
  const { t } = useTranslation("company");
  return (
    <CompanyContainer>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          
          <a href="#companyInfo"> {t("companyInfo")} </a>
        </Menu.Item>
        <Menu.Item key="2">
          
          <a href="#contactInfo"> {t("person:contactInfo")} </a>
        </Menu.Item>
        <Menu.Item key="3">
          
          <a href="#address"> {t("person:address")} </a>
        </Menu.Item>
      </Menu>
    </CompanyContainer>
  );
};

export default CompanyTabSider;
