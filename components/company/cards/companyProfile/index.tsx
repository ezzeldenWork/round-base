import { CompanyProfileContainer } from "../../style";
import { Col, Row, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import CompanyTabs from "./companyTabs";
import MyImage from "../../../common/img";
import Link from "next/link";
import InvestorProfileCard from "../../../investor/cards/investorProfileCard";

const { Text } = Typography;

const CompanyProfile = () => {
  const { t } = useTranslation("company");
  const isCompanyCard = true;
  return (
    <CompanyProfileContainer>
      <div className="row-container">
        <Row gutter={[24, 25]}>
          <Col xl={{ span: 6 }} xs={{ span: 24 }}>
            <InvestorProfileCard companyCard={isCompanyCard} />
          </Col>
          <Col xl={{ span: 18 }} xs={{ span: 24 }}>
            <CompanyTabs />
          </Col>
        </Row>
      </div>
    </CompanyProfileContainer>
  );
};

export default CompanyProfile;
