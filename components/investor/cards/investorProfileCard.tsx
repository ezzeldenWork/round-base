import { Space, Typography } from "antd";
import MyImage from "../../common/img";
import Link from "next/link";
import { InvestorProfileContainer } from "../style";

const { Text } = Typography;

type Props = {
  companyCard?: boolean;
};

const InvestorProfileCard = ({ companyCard }: Props) => {
  return (
    <InvestorProfileContainer>
      <div className="card investor-card">
        <MyImage src="/static/images/round-base/investor_img.svg" width={100} />
        <Space direction="vertical" className="info-space">
          <Text className="company-name"> Investor name </Text>
          {companyCard && (
            <Text className="text desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          )}
          <Space size={8} style={{ width: "100%" }}>
            <MyImage src="/static/images/round-base/map-pin.svg" width={16} />
            <Text className="text"> الدولة , المدينة, الشارع , رقم المبنى </Text>
          </Space>
          <Space size={8} align="baseline" style={{ width: "100%", cursor: "pointer" }}>
            <MyImage src="/static/images/round-base/link-chain.svg" width={16} />
            <Link href="/investor" passHref>
              <Text className="text">www.sitename.com</Text>
            </Link>
          </Space>
        </Space>
      </div>
    </InvestorProfileContainer>
  );
};

export default InvestorProfileCard;
