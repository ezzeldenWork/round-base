import React from "react";
import { Image as AntdImage } from "antd";
import useTranslation from "next-translate/useTranslation";
import NextImage from "next/image";
const images = { default: "/static/images/logo.svg" };
const MyImage = ({
  style = {},
  image = {},
  quality = "md",
  type = "antd",
  avatar = "",
  icon = "",
  rotate = "",
  fallback = "",
  wrapperStyle = {},
  alt = `img ${Math.random * 1000}`,
  ...props
}) => {
  const CurrentQ = image
    ? ["xs", "sm", "md", "lg", "xl", "xxl", "original"].find((v) => image[v])
    : "md";

  const { t, lang } = useTranslation();

  const rotateImg = (rotate) => {
    if (lang === "ar") {
      return "rotate(178deg)";
    }
    if (lang === "en") {
      return "rotate(0)";
    }
  };

  const getIconWidth = (icon) => {
    switch (icon) {
      case "xs":
        return 20;
      case "sm":
        return 24;
      case "lg":
        return 34;
      case "xl":
        return 50;
      default:
        return 29;
    }
  };

  return type === "antd" ? (
    <AntdImage
      width={"100%"}
      src={image ? image[quality] : "error"}
      {...props}
      wrapperStyle={{ ...wrapperStyle, display: icon && "block" }}
      style={{
        ...style,
        cursor: props.preview ? "pointer" : style.cursor,
        borderRadius: avatar ? "50%" : style.borderRadius ?? "unset",
        width: icon ? getIconWidth(icon) : style.width,
        transform: rotate && rotateImg(rotate)
      }}
      fallback={fallback}
      preview={props.preview ? {} : false}
      alt={alt}
    />
  ) : (
    <NextImage
      width={props.layout ? undefined : "100%"}
      height={"100%"}
      // width={"100%"}
      src={
        props.src ||
        (image && CurrentQ ? image[CurrentQ] || images.default : images.default)
      }
      {...props}
      style={{
        ...style,
        cursor: props.preview ? "pointer" : style.cursor,
        borderRadius: avatar ? "50%" : style.borderRadius ?? "unset",
        width: icon ? getIconWidth(icon) : style.width,
        transform: rotate && rotateImg(rotate)
      }}
      alt={alt}
    />
  );
};

export default MyImage;
