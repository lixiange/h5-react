import { useEffect } from "react";

//设置页面标题
export default function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}
