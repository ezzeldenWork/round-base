import UserInfoCard from "./cards/userInfoCard";
import ChangePasswordCard from "./cards/changePasswordUser";
import { ProfileContainer } from "./style";
import { Col, Row } from "antd";

const Profile = () => {
  return (
    <ProfileContainer>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <UserInfoCard />
        </Col>
        <Col span={24}>
          <ChangePasswordCard />
        </Col>
      </Row>
    </ProfileContainer>
  );
};

export default Profile;
