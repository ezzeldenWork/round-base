import React from "react";
import FormTemplete from "../style/formTemplete";
import AddBox from "./addBox";
import styled from "styled-components";
import { Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Form, Input, Select } from "antd";
import useTranslation from "next-translate/useTranslation";

const { Dragger } = Upload;
const { Option } = Select;

const BoxTemplete = styled.div`
  h2 {
    font-weight: bold;
    font-size: 20px;
    color: #37474f;
    margin-bottom: 24px;
    position: relative;
    display: inline-block;
    &.requird {
      &:after {
        position: absolute;
        top: -3px;
        left: -9px;
        content: "*";
        color: #de6449;
      }
    }
  }
  .uplodeFile {
    display: flex;
    justify-content: center;
    width: 660px;
    max-width: 100%;
    margin: 0 auto;
    span {
      width: 100%;
    }
    .ant-upload.ant-upload-drag {
      width: 100%;
      height: 230px;
      border-radius: 8px;
      border: 1px dashed rgba(130, 130, 130, 0.58);
      p.ant-upload-text {
        font-size: 14px;
        color: #747474;
        font-weight: normal;
      }
      .anticon-cloud-upload {
        color: #747474;
      }
    }
  }
  .ant-form-item-label {
    label {
      font-weight: normal;
      font-size: 14px;
      color: #37474f;
    }
  }
  .ant-form-item {
    margin: 24px 0 16px;
    display: block;
    .ant-input {
      margin-top: 16px;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
    }
  }
`;

const FormBox = () => {
  const { t } = useTranslation("investments");

  return (
    <BoxTemplete>
      <FormTemplete>
        <Form>
          {/* From antd */}
          <div id="infoSection">
            <h2 className="requird">{t("investInfo")}</h2>
          </div>
          <div className="uplodeFile">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <CloudUploadOutlined />
              </p>
              <p className="ant-upload-text">{t("addimg")}</p>
            </Dragger>
          </div>
          <Form.Item name="name" label={t("projectName")}>
            <Input />
          </Form.Item>
          <Form.Item name="discription" label={t("projectDescr")}>
            <Input />
          </Form.Item>
          <Form.Item name="type" label={t("projectArea")}>
            <Select>
              <Option value="1">تقني</Option>
              <Option value="2">فني</Option>
              <Option value="other">اخري</Option>
            </Select>
          </Form.Item>
          <Form.Item name="fullQuantity" label={t("totalvalue")}>
            <Input />
          </Form.Item>
          <Form.Item name="fullQuantity" label={t("totalvalue")}>
            <Input />
          </Form.Item>
          <Form.Item name="minQuantity" label={t("minimumInvestment")}>
            <Input />
          </Form.Item>
        </Form>
      </FormTemplete>
      {/* Box Two */}
      <AddBox boxTitle={t("problem")} inputLable={t("address")} id='problemSection' />
      <AddBox boxTitle={t("solv")} inputLable={t("address")} id='problemSection' />
      <AddBox boxTitle={t("product")} inputLable={t("address")} id='problemSection' />
    </BoxTemplete>
  );
};

export default FormBox;
