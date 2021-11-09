import { Col, Divider, Input, Row, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import styled from "styled-components";
import { Breakpoints } from "../../../constants";
import MyImage from "../../common/img";

const { Text, Title } = Typography;

const Footer = () => {
  const { t } = useTranslation("common");

  const socilaMediaData = [
    {
      src: "/static/images/instagram.svg",
      link: "https://www.instagram.com/b7rstore7/",
    },
    {
      src: "/static/images/facebook-img.svg",
      link: "https://www.facebook.com/B7rStore1/?ref=page_internal",
    },
    {
      src: "/static/images/twitter-img.svg",
      link: "https://mobile.twitter.com/B7rStore",
    },
    {
      src: "/static/images/linkedin-frame.svg",
      link: "https://www.linkedin.com/in/b7r-store-11b103215/",
    },
  ];

  const siteLinks = [
    {
      text: `${t("common:onlineStore")}`,
      href: "/onlineStore",
    },
    {
      text: `${t("common:pos")}`,
      href: "/pos",
    },
    {
      text: `${t("common:pricing")}`,
      href: "/pricing",
    },
    {
      text: `${t("common:blog")}`,
      href: "/blog",
    },
    {
      text: `${t("common:contact")}`,
      href: "/contact",
    },
  ];

  const contactInfo = [
    {
      title: "(+20) 102 646 2262",
      src: "/static/images/footer-whats.svg",
      link: `https://wa.me/+201026462262?text=${t("whatsappText")}`,
    },
    {
      title: "(+966) 54 438 5270",
      src: "/static/images/footer-whats.svg",
      link: `https://wa.me/+966544385270?text=${t("whatsappText")}`,
    },
  ];
  return (
    <Container>
      <div className="row-container">
        <Row gutter={[20, 40]}>
          <Col
            lg={{ span: 7, order: 1 }}
            sm={{ span: 8, order: 1 }}
            xs={{ span: 24, order: 3 }}>
            <Title level={5} className="header">
              {t("common:followUs")}
            </Title>
            <Space size="small">
              {socilaMediaData.map((image, index) => (
                <Link href={image.link} key={index} replace>
                  <a target="_blank">
                    <div className="image-container">
                      <MyImage
                        type="next"
                        width={17}
                        height={17}
                        className="social-img"
                        src={image.src}
                        alt="footer image"
                      />
                    </div>
                  </a>
                </Link>
              ))}
            </Space>
          </Col>
          <Col
            lg={{ span: 5, order: 2 }}
            sm={{ span: 8, order: 2 }}
            xs={{ span: 10, order: 1 }}>
            <Title level={5} className="header">
              {t("common:company")}
            </Title>
            <Space wrap={true} size="small" direction="vertical">
              {siteLinks.map(({ text, href }, index) => (
                <Link href={href} key={index}>
                  <Text className="text">{text}</Text>
                </Link>
              ))}
            </Space>
          </Col>
          <Col
            lg={{ span: 5, order: 3 }}
            sm={{ span: 8, order: 3 }}
            xs={{ span: 14, order: 2 }}>
            <Title level={5} className="header">
              {t("common:contact")}
            </Title>
            <Space size="middle" direction="vertical">
              {contactInfo.map((link, index) => (
                <Link href={link.link}>
                  <a target="_blank">
                    <Space key={index} wrap={true} className="contact-info">
                      <MyImage
                        type="next"
                        width={16}
                        height={15}
                        src={link.src}
                        alt="whatsapp image"
                      />
                      <Text className="text">{link.title}</Text>
                    </Space>
                  </a>
                </Link>
              ))}
            </Space>
          </Col>
          <Col order={4} lg={{ span: 7 }} xs={{ span: 0 }}>
            <Title level={5} className="header">
              {t("common:subscribe")}
            </Title>
            <Input
              placeholder={t("common:yourEmail")}
              addonAfter={
                <MyImage
                  type="next"
                  width={20}
                  height={20}
                  src="/static/images/newsletter.svg"
                  alt="newsletter"
                  className="newsletter-image"
                />
              }
            />
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Col>
            <Link href="/privacy">
              <a>
                <Text className="privacy">{t("common:privacyPolicy")}</Text>
              </a>
            </Link>
            <Link href="/terms">
              <a>
                <Text className="privacy">{t("common:terms")}</Text>
              </a>
            </Link>
          </Col>
          <Col>
            <Text className="copyright">© 2021 B7R</Text>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: ${(props) => props.theme.customColors.primary};
  padding: 24px 0;
  margin-top: auto !important;

  @media (max-width: ${Breakpoints.md}) and (min-width: ${Breakpoints.sm}) {
    .row-container {
      width: 100%;
      max-width: 100%;
    }
  }

  .image-container {
    background-color: ${(props) => props.theme.customColors.secondary};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      line-height: 0;
    }
    @media (min-width: ${Breakpoints.md}) {
      margin: 0px 2.5px;
    }
  }

  .ant-image {
    cursor: pointer;
  }
  .ant-typography {
    color: ${(props) => props.theme.customColors.white};
  }
  .header {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 12px;
  }
  .text {
    font-weight: 400;
    font-size: 12px;
    cursor: pointer;
  }
  @media (min-width: ${Breakpoints.md}) {
    padding: 40px 0;
    .header {
      font-size: 16px;
    }
    .text {
      font-size: 14px;
    }
  }
  .contact-info {
    direction: ltr;
  }
  .contact-info .ant-image {
    top: 2px;
  }
  .ant-divider-horizontal {
    background-color: ${(props) => props.theme.customColors.lightGray};
    margin: 32px 0;
  }

  .copyright,
  .privacy {
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.theme.customColors.lightGray};
  }
  .privacy {
    margin-right: 10px;
  }

  .ant-input,
  .ant-input-group {
    height: 48px;
    border-radius: 36px;
    background: ${(props) => props.theme.customColors.white};
    border: 0;
    display: flex;
  }
  .ant-input-group-addon {
    width: 55px;
    height: 48px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.customColors.secondary};
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .ant-input-group > .ant-input-rtl:first-child,
  .ant-input-group-rtl .ant-input-group-addon:first-child {
    border-radius: ${(props) => (props.theme.lang == "ar" ? "50%" : "0 2px 2px 0")};
    padding: 0 15px;
  }
  .ant-input-group-rtl .ant-input-group-addon:last-child {
    border: 0;
  }
  .newsletter-image {
    transform: ${(props) => (props.theme.lang == "ar" ? "scale(-1)" : "unset")};
  }
`;
