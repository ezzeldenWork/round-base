export enum Breakpoints {
  xxl = `1600px`,
  xl = `1200px`,
  lg = `992px`,
  md = `768px`,
  sm = `576px`,
  xs = `320px`,
}

export const b7rPlatformUrl =
  process.env.NODE_ENV === "development" || process.env.REACT_APP_NODE_ENV_STAGING === "dev"
    ? "https://www.b7r.shop/"
    : process.env.REACT_APP_NODE_ENV_STAGING === "staging"
    ? "https://www.b7r.live/"
    : "https://www.b7r.store/";