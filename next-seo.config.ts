const title = "Round Base";
const description = "Round Base Description.";

const SEO = {
  title,
  description,
  titleTemplate: "%s",
  // canonical: "https://www.b7r.store",
  openGraph: {
    type: "website",
    locale: "en_IE",
    // url: "https://www.b7r.store",
    title,
    description,
    site_name: "Round Base",

    images: [
      {
        // url: "https://www.b7r.store/static/images/logo.svg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    // handle: "@B7rStore",
    // site: "@B7rStore",
    cardType: "summary_large_image",
  },
};

export default SEO;
