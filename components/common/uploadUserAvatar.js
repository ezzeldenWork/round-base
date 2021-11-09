import { Spin } from "antd";
import { useRef, useState } from "react";
import styled from "styled-components";
import MyImage from "./img";

const UploadUserAvatar = ({ img }) => {
  const inputRef = useRef();
  const [avatarLoading, setLoading] = useState(false);

  const upload = async (file) => {
    setLoading(true);

    // const image = file ? await uploadImage(file) : null;
    // await updateAvatar({
    //   variables: {
    //     data: { avatar: image.data },
    //   },
    //   refetchQueries: [{ query: ME }],
    // });
  };

  const handleUpload = async (ev) => {
    if (ev.target.files[0]) {
      setLoading(true);
      const image = ev.target.files[0];

      await upload(image);
    }
    setLoading(false);
  };
  const triggerClick = () => {
    inputRef.current.click();
  };
  return (
    <UserAvatarImage
      type="upload"
      onClick={triggerClick}
      img={
        img
          ? img.lg + "?" + Math.random()
          : "https://hapigig-assets.s3.amazonaws.com/profile/testUpload"
      }
      avatarLoading={avatarLoading}>
      {avatarLoading && <Spin style={{ alignSelf: "center", fontSize: 40 }} />}
      <input
        style={{ display: "none" }}
        id="selectImage"
        type="file"
        onChange={handleUpload}
        ref={inputRef}
      />
    </UserAvatarImage>
  );
};

export default UploadUserAvatar;

const UserAvatarImage = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-image: url("/static/images/round-base/avatar.svg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;
