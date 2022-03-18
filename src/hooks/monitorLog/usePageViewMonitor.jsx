import { useState, useCallback } from "react";
import {useRouteMatch} from 'react-router-dom'
import request from "../../request/api";
import { getFields, behavior } from "./monitorFields";

export default function useMonitoringLog() {
  const pageUrl = useRouteMatch().path;
  const [monitorFields] = useState(getFields());
  const visitLog = useCallback(
    (parmas) => {
      request.logPot({
        ...monitorFields,
        ...parmas,
        pageUrl,
        pageDesc: behavior[1],
        behaviorType: 1,
      });
    },
    [monitorFields, pageUrl]
  );
  return visitLog;
}
