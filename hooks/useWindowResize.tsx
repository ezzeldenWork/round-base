import { useEffect } from "react";

function useWindowResize(callback: () => void) {
  useEffect(() => {
    callback();
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", () => {
        console.log("event removed");
      });
    };
  }, []);
}
export default useWindowResize;
