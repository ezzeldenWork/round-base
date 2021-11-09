import { Button, Dropdown, Row, Space, Menu, Typography, Avatar } from "antd";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";
import { Breakpoints } from "../../../../constants";
import MyImage from "../../../common/img";
import router, { useRouter } from "next/router";
import { LeftOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Text } = Typography;

const AccountMenu = () => {
  const { t, lang } = useTranslation("common");

  const { push, pathname, asPath } = useRouter();
  const changeLang = (newLang) => {
    push(pathname, asPath, { locale: newLang });
  };
  
  const menu = (
    <Menu selectedKeys={[]}>
      <Menu.Item onClick={() => router.push("/profile")} icon={<MyImage src="/static/images/round-base/setting.svg" width={15} />}>
        <Text>{t("profilSetting")}</Text>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          changeLang(lang == "en" ? `ar` : `en`);
        }}
        icon={<MyImage src="/static/images/round-base/lang.svg" width={15} />}>
        <Text>{t("changeLang")}</Text>
      </Menu.Item>
      <Menu.Item
        danger
        onClick={() => router.push("/signin")}
        icon={<MyImage src="/static/images/round-base/trash.svg" width={15} />}>
        {t("logout")}
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Row justify="end">
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          overlayClassName="user-dropdown"
          arrow={true}
          overlayStyle={{ width: 221, height: 160 }}>
          <Button type="text" style={{ height: "unset" }}>
            <Space align="baseline">
              <Avatar
                src={<MyImage src="/static/images/round-base/avatar.svg" width={30} />}
              />
              <Text className="username"> username </Text>
            </Space>
          </Button>
        </Dropdown>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  .sidebar {
    display: unset;

    @media (max-width: ${Breakpoints.lg}) {
      display: none;
    }
  }
  .username {
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => props.theme.customColors.white};
  }
  .ant-dropdown-menu-title-content .text {
    margin: 0 15px;
  }
  .ant-dropdown-menu-item-icon {
    margin-right: 0;
  }
`;

export default AccountMenu;
