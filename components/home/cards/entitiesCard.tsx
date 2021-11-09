import { Typography, Menu, Space } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../../common/img";
import { OverviewContainer } from "./style";
import Link from "next/link";
import router from "next/router";

const { Text } = Typography;
const { SubMenu } = Menu;

const EntitiesCard = () => {
  const { t } = useTranslation("home");

  const companies = [
    {
      text: `${t("company")} 1`,
      link: "/company",
    },
  ];
  const persons = [
    {
      text: `${t("person")} 1`,
      link: "/person",
    },
  ];
  const investors = [
    {
      text: `${t("investor")} 1`,
      link: "/investor",
    },
  ];

  return (
    <OverviewContainer>
      <div className="card">
        <Text className="home_header"> {t("existingEntities")} </Text>
        <Menu
          style={{ marginTop: 16 }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          inlineIndent={0}>
          <SubMenu
            key="1"
            icon={<MyImage src="/static/images/round-base/company.svg" width={20} />}
            title={t("companies")}>
            {companies.map((option, index) => (
              <Menu.Item key={index} onClick={() => router.push(`${option.link}`)}>
                {option.text}
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu
            key="2"
            icon={<MyImage src="/static/images/round-base/person.svg" width={20} />}
            title={t("persons")}>
            {persons.map((option, index) => (
              <Menu.Item key={index} onClick={() => router.push(`${option.link}`)}>
                {option.text}
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu
            key="3"
            icon={<MyImage src="/static/images/round-base/investor.svg" width={20} />}
            title={t("investors")}>
            {investors.map((option, index) => (
              <Menu.Item key={index} onClick={() => router.push(`${option.link}`)}>
                {option.text}
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </div>
    </OverviewContainer>
  );
};

export default EntitiesCard;
