import { Button } from "antd";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";
import MyImage from "./img";
import Link from "next/link";

const TextButton = () => {
  const { t, lang } = useTranslation();
  return (
    <ButtonContainer>
      <Link href="" passHref>
        <Button type="text">
          {lang == "en" ? <MyImage width={24} src="/static/images/right-steps.svg" /> : null}
          {t("common:buildStore")}
          {lang == "ar" ? <MyImage width={24} src="/static/images/right-steps.svg" /> : null}
        </Button>
      </Link>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  .ant-btn-text {
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    color: #1985a1;
    gap: 8px;
  }
`;

export default TextButton;
