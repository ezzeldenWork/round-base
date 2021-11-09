import { DownOutlined } from "@ant-design/icons";
import { Button, Menu, Popover, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const { Text } = Typography;

const Links = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Container>
      <Space size={30}>
        <Link href="/">
          <a>
            <div
              style={{
                width: lang == "ar" ? 100 : 50,
              }}
            >
              <Text>{t("homePage")}</Text>
            </div>
          </a>
        </Link>
        <Link href="/explore">
          <a>
            <Text>{t("explore")}</Text>
          </a>
        </Link>
        <Link href="/recommendations">
          <a>
            <div
              style={{
                width: "140px",
              }}
            >
              <Text>{t("recommend")}</Text>
            </div>
          </a>
        </Link>
      </Space>
    </Container>
  );
};

export default Links;

const Container = styled.div`
  .anticon svg {
    width: 8px;
    height: 8px;
  }
  .ant-typography {
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
  }
  .ant-btn {
    display: flex;
    align-items: center;
    padding: 0;
  }
`;
