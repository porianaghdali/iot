import { useState, useCallback } from "react";
import { getZoneSensor } from "../app/api/fetchMonitoring";

export function useMonitoring(token) {
  const [zoneList, setZoneList] = useState([]);
 const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getList = useCallback(
    
    async () => {
          setLoading(true);
    setError(null);
      try {
        const res = await getZoneSensor({ token });
        if (res?.errorCode === 0) {
          setZoneList(res.data || []);
        } else {
          setZoneList([]);
        }
      } catch (err) {
              setError(err);

        setZoneList([]);
      } finally {
      setLoading(false);
    }
    },
    [token]
  );



  return {
    zoneList,getList,loading,error
  };
}
