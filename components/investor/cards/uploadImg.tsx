import { Upload, message } from "antd";
import { useState } from "react";
import styled from "styled-components";
import MyImage from "../../common/img";

const UploadImg = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => setLoading(false));
    }
  };

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>
        <MyImage src="/static/images/round-base/upload_img.svg" width={48} />
      </div>
    </div>
  );

  return (
    <Container>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}>
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </Container>
  );
};

const Container = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 50px;
  text-align: center;
`;

export default UploadImg;
