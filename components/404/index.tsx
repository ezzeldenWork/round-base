import { Button, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const { Title, Paragraph } = Typography;
// DONE: style
// DONE: Back to home
// TODO: local
// TODO: refactor
const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  padding-top: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MainTitle = styled(Title)``;
const Description = styled(Paragraph)`
  max-width: 500px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.Gray1};
`;

const BackButton = styled(Button)`
  background: ${({ theme: { customColors } }) => customColors.primary};
  color: ${({ theme: { customColors } }) => customColors.white};
  border-color: ${({ theme: { customColors } }) => customColors.primary};
  border-radius: 4px;
  margin-top: 15px;
  :hover {
    background-color: ${({ theme: { customColors } }) => customColors.primaryHover};
  }
`;

const index = () => {
  const { replace } = useRouter();
  const { t } = useTranslation();
  return (
    <Container>
      <Image src="/static/images/image404.svg" height={500} width={500} />
      <MainTitle>{t("404:title")}</MainTitle>
      <Description>{t("404:description")}</Description>
      <BackButton
        type="primary"
        onClick={() => {
          replace("/");
        }}>
        {t("404:backButton")}
      </BackButton>
    </Container>
  );
};

export default index;
