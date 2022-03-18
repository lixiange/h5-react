import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

export default function usePath(title) {
  let match = useRouteMatch();
  const { path, url } = match;

  return { path,url };
}
