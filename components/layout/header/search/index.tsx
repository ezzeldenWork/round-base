import { Container } from "./style";
import { Input, AutoComplete } from "antd";
import useTranslation from "next-translate/useTranslation";

const Search = () => {
  const { t } = useTranslation("common");
  const options = [];

  return (
    <Container>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        className="search-input"
        style={{
          width: "100%",
        }}
        options={options}
        // onChange={searchFunc}
      >
        <Input.Search size="large" placeholder={t("search")} enterButton />
      </AutoComplete>
    </Container>
  );
};

export default Search;
