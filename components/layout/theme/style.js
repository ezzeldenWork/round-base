export const theme = (props) => {
  console.log("🚀 ~ file: style.js ~ line 2 ~ theme ~ props", props);
  return {
    ...props,
    breakpoints: {
      xxl: `1600px`,
      xl: `1200px`,
      lg: `992px`,
      md: `768px`,
      sm: `576px`,
      xs: `320px`,
    },
    customColors: {
      primary: `#163663`,
      primaryHover: "#4A94A5",
      hover: "#5474A1",
      secondary: `#6EBBC5`,
      secondaryHover: `#22AED1`,
      white: "#fff",
      lightGray: "#fafafa",
      orange: "#FE5F55",
      lightOrange: "#EC663D",
      dark: "#37474F",
      ofWhite: "#ECF5F7",
      darkGray: "#9b9b9b48",
      gray: "rgba(235, 235, 235, 0.14)",
      lightBlue: "#E1F5FA",
      gray2: "#FBFBFB",
      lightDark: "#5C5C5C"
    },
    colors: {
      black: "#000",
      black3: "#333",
      Gray: "#999",
      Gray1: "#828282",
      Gray2: "#4f4f4f",
      Gray3: "#272833",
      Gray4: "#444444",
      Gray5: "#18191F",
      red: "#FE5F55",
      hoverRed: "#FF7169",
      Gray6: "#999",
    },
    backgroundColors: {
      bgPrimary: `#001529`,
      bgSecondary: "#f5f5f5",
      lightBlue: "#EAF5FF",
      lightRed: "#FFF8F9",
      overlay: "#F2FFFF",
      lightGray: "#FAFAFA",
      red: "#FE5F55",
      gray6: "#f2f2f2",
      lighter: "#DCF3F9",

      // bgSecondaryLight: lighten(0.6, colors?.secondary || `#6a759b`),
    },
    borderColors: {
      primaryBorderColor: `#001529`,
      secondBorderColor: `#c4c4c4`,
      black3: "#333",
      light: "#e3eef1",
      lightGray: "#FAFAFA",
      gray: "#dadada",
      gray2: "#444444",
    },
    // baseFontSize: {
    //   h1FontSize: getSize({
    //     xxl: "40px",
    //     xl: "32px",
    //     md: "24px",
    //     xs: "20px",
    //   }),
    //   h2FontSize: getSize({
    //     xxl: "24px",
    //     xl: "20px",
    //     md: "16px",
    //     sm: "12px",
    //   }),
    //   h3FontSize: getSize({
    //     xxl: "24px",
    //     md: "16px",
    //     xs: "12px",
    //   }),
    //   h4FontSize: getSize({
    //     xxl: "24px",
    //     xl: "16px",
    //     md: "14px",
    //   }),
    //   h5FontSize: getSize({
    //     xxl: "20px",
    //     xl: "16px",
    //     md: "14px",
    //   }),
    // },
    baseBoxShadow: {
      boxShadowBase: `0 2px 8px rgba(0, 0, 0, 0.15)`,
      sortingBoxShadow: `0 2.36px 9.46px #2979FF`,
    },
    borderRadius: {
      borderRadiusBase: `4px`,
      bgBorderRadius: `10px`,
    },
  };
};

/*
style breakPoint use 
min-width
xs to xxl
*/
