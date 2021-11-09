export type Article = {
  id: string;
  title: {
    auto: string;
  };
  image: {
    original: string;
  };
  author: {
    name: string;
  };
  createdAt: string;
  seenNum: number;
  description: {
    auto: string;
  };
  seo: any;
};

export type CountryCurrency = {
  id: number;
  rate: number;
  code: string;
};
export type OfferData = {
  offerBadge?: {
    content: string;
    color: string;
  };
  headerText: string;
  mainTitle: string;
  subTitle?: string;
  descriptionData: {
    content: string;
    isStrick: boolean;
    color: string;
  };
  cardColor: string;
};
