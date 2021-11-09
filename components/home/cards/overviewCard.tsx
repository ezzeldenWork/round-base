import { Typography, Menu, Space } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../../common/img";
import { OverviewContainer } from "./style";
import Link from "next/link";
import router from "next/router";

const { Text } = Typography;
const { SubMenu } = Menu;

const OverviewCard = () => {
  const { t } = useTranslation("home");

  const createOptions = [
    {
      text: t("person"),
      link: "/person"
    },
    {
      text: t("company"),
      link: "/addCompany"
    },
    {
      text: t("investor"),
      link: "/addInvestor"
    },
  ];

  return (
    <OverviewContainer>
      <div className="card">
        <Text className="home_header"> {t("overview")} </Text>
        <Menu
          style={{ marginTop: 16 }}
          mode="inline" defaultSelectedKeys={['1']}
          inlineIndent={0}>
          <SubMenu
            // key="1"
            icon={<MyImage src="/static/images/round-base/plus-sider.svg" width={20} />}
            title={t("newEntity")}>
            {createOptions.map((option, index) => (
              <Menu.Item key={index} onClick={() => router.push(`${option.link}`)}> {option.text} </Menu.Item>
            ))}
          </SubMenu>
          <Space direction="vertical" size={20} style={{ width: "100%", marginTop: 10 }}>
            <Link href="/savedItems" passHref>
              <Space size={16} style={{ width: "100%", cursor: "pointer" }}>
                <MyImage src="/static/images/round-base/saved-search.svg" width={20} />
                <Text className="card-item">{t("savedItems")}</Text>
              </Space>
            </Link>
            <Link href="/profile" passHref>
              <Space size={16} style={{ width: "100%", cursor: "pointer" }}>
                <MyImage src="/static/images/round-base/setting.svg" width={20} />
                <Text className="card-item">{t("common:profilSetting")}</Text>
              </Space>
            </Link>
          </Space>
        </Menu>
      </div>
    </OverviewContainer>
  );
};

export default OverviewCard;
