import { Button, Space } from "antd";
import Sidebar from "../../sidebar/index";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";
import { Breakpoints } from "../../../../constants";

const LoginAuth = () => {
  const { t } = useTranslation("common");
  return (
    <Container>
      <Space
        // size={md ? "large" : "middle"}
        align="center"
        style={{ width: "100%" }}>
        <Link href="" passHref>
          <a>
            <Button type="text">{t("common:login")}</Button>
          </a>
        </Link>
        <div className="sidebar">
          <Sidebar />
        </div>
      </Space>
    </Container>
  );
};

const Container = styled.div`
  .sidebar {
    display: none;

    @media (max-width: ${Breakpoints.lg}) {
      display: unset;
    }
  }
`;

export default LoginAuth;
