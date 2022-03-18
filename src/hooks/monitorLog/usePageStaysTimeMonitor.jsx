import { useState, useRef, useEffect } from "react";
import {useRouteMatch} from 'react-router-dom'
import request from "../../request/api";
import { msToTime } from "../../utils/util";
import {getFields,behavior} from './monitorFields'

export default function useMonitoringLog(pid) {
  const visitTime = useRef(new Date());
  const pageUrl = useRouteMatch().path;
  const [monitorFields] = useState(getFields());

  useEffect(() => {
    const monitorPageStaysTime = () => {
      const logData = {
        ...monitorFields,
        keyParam:pid,
        behaviorType: 6,
        pageUrl,
        pageDesc: behavior[6],
        timeConsuming: msToTime(new Date() - visitTime.current),
      };
      request.logPot(logData);
    };
    window.addEventListener("unload", monitorPageStaysTime);
    return () => {
      monitorPageStaysTime();
      window.removeEventListener("unload", monitorPageStaysTime);
    };
  }, [monitorFields, pageUrl, pid]);
}
