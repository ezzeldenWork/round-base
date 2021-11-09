import { FilterContainer } from "../style";
import { Drawer, Button } from "antd";
import { useState } from "react";
import FilterMenus from "../../common/cards/filterMenus";
import useTranslation from "next-translate/useTranslation";

const MobFilterDrawer = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation("explore");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <FilterContainer>
      <Button className="filter-btn" onClick={showDrawer} block>
        {t("filter")}
      </Button>
      <Drawer
        placement={"top"}
        closable
        onClose={onClose}
        visible={visible}
        height="100%"
        className="mob_filter_drawer"
      >
        <div className="drawer-card">
          <FilterMenus />
        </div>
      </Drawer>
    </FilterContainer>
  );
};

export default MobFilterDrawer;
