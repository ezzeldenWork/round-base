import { Col, Row } from "antd";
import { CompanyContainer } from "../style";
import CompanyTable from "./companyTable";
import FilterCard from "./filterCard";
import MobFilterDrawer from "./mobFilterDrawer";

const CompaniesTab = () => {
  return (
    <CompanyContainer>
      <Row gutter={{ lg: 36, xs: 0 }}>
        <Col lg={{ span: 0 }} xs={{ span: 24 }}>
          {/* filter modal */}
          <MobFilterDrawer />
        </Col>
        <Col lg={{ span: 6 }} xs={{ span: 0 }}>
          {/* filter */}
          <FilterCard />
        </Col>
        <Col lg={{ span: 18 }} xs={{ span: 24 }}>
          {/* table */}
          <CompanyTable />
        </Col>
      </Row>
    </CompanyContainer>
  );
};

export default CompaniesTab;
