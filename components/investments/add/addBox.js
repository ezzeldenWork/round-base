import React, { useRef, useState } from "react";
import FormTemplete from "../style/formTemplete";
import { Form, Input } from "antd";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";

const importJodit = () => import("jodit-react");

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

const AddBox = (props) => {
  const { t } = useTranslation("investments");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
    toolbarButtonSize: "large",
    uploader: {
      url: "https://api.cloudinary.com/v1_1/dp5tdylzs/image/upload",
      insertImageAsBase64URI: true,
      imagesExtensions: ["jpg", "png", "jpeg", "gif"],
      filesVariableName: function (t) {
        console.log("🚀 ~ file: joditEditor.js ~ line 48 ~ Example ~ t", t);
        return "files[" + t + "]";
      },
    },
  };

  return (
    <div>
      <FormTemplete>
        <div id={props.id}>
          <h2>{props.boxTitle}</h2>
        </div>
        <Form>
          <Form.Item name="proplemTitle" label={props.inputLable}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label={t("description")}>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onChange={(newContent) => {}}
              onBlur={(newContent) => {
                console.log("newContent", newContent);
                update(newContent);
              }}
            />
          </Form.Item>
        </Form>
      </FormTemplete>
    </div>
  );
};

export default AddBox;
