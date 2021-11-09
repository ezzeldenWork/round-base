import { Col, Row, Typography, Carousel } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../common/img";
import { CreateContainer } from "./cards/style";
import Link from "next/link";

const { Text } = Typography;

const CreateEntityCard = () => {
  const { t } = useTranslation("home");

  const cards = [
    {
      bgColor: "#63A7E7",
      text: t("company"),
      img: "/static/images/round-base/company_img.svg",
      link: "/addCompany",
    },
    {
      bgColor: "#2E5DB7",
      text: t("investor"),
      img: "/static/images/round-base/invest_img.svg",
      link: "/addInvestor",
    },
    {
      bgColor: "#22AED1",
      text: t("person"),
      img: "/static/images/round-base/person_img.svg",
      link: "/person",
    },
  ];

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 405,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // variableWidth: true,
          // centerMode: true,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          // centerMode: true,
        },
      },
    ],
  };

  return (
    <CreateContainer>
      <Carousel {...settings}>
        {cards.map((card, index) => (
          <Link href={card.link} key={index} passHref>
            <div
              className="create-card"
              style={{ backgroundColor: `${card.bgColor}` }}
            >
              <Text className="card_text"> {card.text} </Text>
              <MyImage src={card.img} width={40} />
            </div>
          </Link>
        ))}
      </Carousel>
    </CreateContainer>
  );
};

export default CreateEntityCard;
