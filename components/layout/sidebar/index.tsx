import React, { useState } from "react";
import TopicMenu from "./topicMenu";
import NavSidebar from "./navSidebar";
import { Container } from "./style";

const MainSidebar = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Container>
      <NavSidebar menu={<TopicMenu onClose={onClose} />}
        onClose={onClose} showDrawer={showDrawer} visible={visible} />
    </Container>
  );
};

export default MainSidebar;
