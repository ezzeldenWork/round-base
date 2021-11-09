import Link from "next/link";
import MyImage from "../../../../common/img";
import { LogoContainer } from "./style";

const Logo = () => {

  return (
    <LogoContainer>
      <Link href="/">
        <a>
          <MyImage
            style={{
              display: "unset",
            }}
            alt="logo"
            src="/static/images/round-base/rbLogo.svg"
            className="logo"
          />
        </a>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
