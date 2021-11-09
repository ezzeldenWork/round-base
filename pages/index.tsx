import Home from "../components/home";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import HomeSide from "../components/home/cards/homeSide";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <>
      <NextSeo title={t("seo.title")} description="" />
      <Header />
      <HomeSide>
        <Home />
      </HomeSide>
      {/* <Footer /> */}
    </>
  );
}

// export async function getStaticProps(ctx) {
//   return{}
// }
