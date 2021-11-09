import { Button, Select, Typography } from "antd";
import { useRouter } from "next/router";
import MyImage from "../../../common/img";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

const { Text } = Typography;

const LanguageChanger = () => {
  const { lang } = useTranslation();
  const { push, pathname, asPath } = useRouter();
  const changeLang = (newLang) => {
    push(pathname, asPath, { locale: newLang });
  };

  return (
    <Container lang={lang}>
      <Button
        type="text"
        onClick={() => {
          changeLang(lang == "en" ? `ar` : `en`);
        }}>
        <Text>{lang == "en" ? `AR` : `EN`}</Text>
        <MyImage
          type="next"
          width={15}
          alt="langchanger"
          height={15}
          src="/static/images/round-base/lang.svg"
        />
      </Button>
    </Container>
  );
};

export default LanguageChanger;

const Container = styled.div`
  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
`;
