import { ConfigProvider, Layout } from "antd";
import moment from "moment";
import "moment/locale/ar";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./footer";
import Header from "./header";
import { GlobalStyle } from "./theme/global.styles";
import { theme } from "./theme/style";
interface Props {
  children?: any;
  title?: string;
}

const Page = ({ children, title }: Props) => {
  const { lang, t } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);
  moment.locale(lang);

  const { asPath } = useRouter();
  console.log(asPath);
  const removeLayOut = asPath.includes("signup");
  return (
    <ThemeProvider theme={theme({ lang })}>
      <ConfigProvider direction={lang == "ar" ? "rtl" : "ltr"}>
        <GlobalStyle />
        {/* <Meta title={title} /> */}

        <Layout className={lang == "ar" ? "rtl" : "ltr"}>
          <Layout className="site-layout" onClick={() => !collapsed && setCollapsed(true)}>
            {/* <Header
                links={links}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
              /> */}
            {removeLayOut ? (
              children
            ) : (
              <>
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
              </>
            )}
          </Layout>
        </Layout>
      </ConfigProvider>
    </ThemeProvider>
  );
};
export default Page;
