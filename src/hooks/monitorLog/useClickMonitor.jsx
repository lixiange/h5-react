import React, { useState, useCallback } from "react";
import {useRouteMatch} from 'react-router-dom'
import request from "../../request/api";
import { getFields, behavior } from "./monitorFields";

export default function useMonitoringLog() {
  const pageUrl = useRouteMatch().path;
  const [monitorFields] = useState(getFields());

  const clickLog = useCallback(
    (parmas) => {
      request.logPot({
        ...monitorFields,
        ...parmas,
        pageUrl,
        pageDesc: behavior[parmas.behaviorType],
      });
    },
    [monitorFields, pageUrl]
  );

  const MonitorClick =useCallback((props) => {
    return (
      <div
        onClick={() => {
          if (typeof props.onClick === "function") {
            props.onClick();
          }
          clickLog(props.monitorData);
        }}
      >
        {props.children}
      </div>
    );
  },[clickLog]);

  return MonitorClick
}
