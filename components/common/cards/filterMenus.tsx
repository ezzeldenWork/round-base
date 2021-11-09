import { Button, Radio, Space, Menu, Typography, Divider, Input } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../../common/img";

const { Text } = Typography;
const { SubMenu } = Menu;

const FilterMenus = () => {
  const { t } = useTranslation("explore");
  return (
    <>
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Text className="filter-text"> {t("filter")} </Text>
        <Button type="text" danger>
          {t("clear")}
        </Button>
      </Space>
      <Divider />
      <Menu
        style={{ width: "100%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={[]}
        inlineIndent={0}
        mode="inline">
        <>
          <SubMenu
            key={"sub1"}
            icon={<MyImage src="/static/images/round-base/activity-filter.svg" width={16} />}
            title={t("activity")}>
            <Menu.ItemGroup>
              <Menu.Item key="1">
                <Input.Search size="large" placeholder={t("searchActivity")} enterButton />
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </>
      </Menu>
      <Divider />
      <Menu
        style={{ width: "100%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={[]}
        inlineIndent={0}
        mode="inline">
        <>
          <SubMenu
            key={"sub1"}
            icon={<MyImage src="/static/images/round-base/carbon_location.svg" width={16} />}
            title={t("location")}>
            <Menu.ItemGroup>
              <Menu.Item key="1">
                <Space direction="vertical" size={8}>
                  <Text className="location"> {t("person:country")} </Text>
                  <Input.Search size="large" placeholder={t("searchCountry")} enterButton />
                </Space>
              </Menu.Item>
              <Menu.Item key="2">
              <Space direction="vertical" size={5}>
                  <Text className="location"> {t("person:state")} </Text>
                  <Input.Search size="large" placeholder={t("searchState")} enterButton />
                </Space>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </>
      </Menu>
      <Divider />
      <Menu
        style={{ width: "100%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={[]}
        inlineIndent={0}
        mode="inline">
        <>
          <SubMenu
            key={"sub1"}
            icon={<MyImage src="/static/images/round-base/industry.svg" width={16} />}
            title={t("industry")}>
            <Menu.ItemGroup>
              <Menu.Item key="1">
                <Input.Search size="large" placeholder={t("searchIndustry")} enterButton />
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </>
      </Menu>
      <Divider />
      <Menu
        style={{ width: "100%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={[]}
        inlineIndent={0}
        mode="inline">
        <>
          <SubMenu
            key={"sub1"}
            icon={<MyImage src="/static/images/round-base/employee-line.svg" width={16} />}
            title={t("investor:employeeNum")}>
            <Menu.ItemGroup>
              <Menu.Item key="1">
                <Input.Search
                  size="large"
                  placeholder={t("investor:employeeNum")}
                  enterButton
                />
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </>
      </Menu>
      <Divider />
      <Menu
        style={{ width: "100%" }}
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={[]}
        inlineIndent={0}
        mode="inline">
        <>
          <SubMenu
            // key={"sub1"}
            icon={<MyImage src="/static/images/round-base/location-company.svg" width={16} />}
            title={t("company:companyType")}>
            <Menu.ItemGroup>
              <Radio.Group>
                <Space size={20} direction="vertical">
                  <Radio value={1}> {t("company:profit")} </Radio>
                  <Radio value={2}> {t("company:Nonprofit")} </Radio>
                </Space>
              </Radio.Group>
            </Menu.ItemGroup>
          </SubMenu>
        </>
      </Menu>
    </>
  );
};

export default FilterMenus;
