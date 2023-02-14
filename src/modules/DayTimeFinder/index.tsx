import React, { useState } from "react";
import { fetchErrorHandler } from '../../common/handlers';
import { dayTimeFinderService } from "./DayTimeFinder.service";
import IpForm from '../../widgets/IPForm';
import { validIPAddress } from '../../common/helpers';

const DayTimeFinder = () => {
  const [ip, setIp] = useState({ currentIp: "", inputIp: "" });
  const [loading, setLoading] = useState(false);
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [timezone, setTimezone] = useState("");

  const getDayTimeData = async (ipAddress: string) => {
    setLoading(true);

    const { sunrise, sunset, timezone, ip: currentIp } = await dayTimeFinderService.getDayTimeFromIp(ipAddress)
      .catch(fetchErrorHandler)
      .finally(() => setLoading(false));

    setSunrise(sunrise);
    setSunset(sunset);
    setTimezone(timezone);
    setIp({ ...ip, currentIp });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { inputIp, currentIp } = ip;
    if (inputIp === "") {
      await getDayTimeData(inputIp);
      return;
    }

    if (currentIp !== inputIp) { // if and new ip are same no need to call the API
      if (validIPAddress(inputIp))
        await getDayTimeData(inputIp);
    }

  };

  return (
    <IpForm
      currentIp={ip.inputIp}
      loading={loading}
      sunrise={sunrise}
      sunset={sunset}
      timezone={timezone}
      handleSubmit={handleSubmit}
      handleIpChange={(inputIp) => setIp({ ...ip, inputIp })}
    />
  );
};

export default DayTimeFinder;
