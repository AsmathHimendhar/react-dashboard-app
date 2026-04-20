import { useEffect, useState } from "react"

const useFetch= function(apiFunc:Function){
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    const callApi = async () => {
      try {
        setLoading(true);
        setError(null);
        const resp = await apiFunc();
        setData(resp);
      } catch (err: any) {
        setError(err?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      callApi();
    }, [apiFunc]);
  
    return { data, loading, error, refetch: callApi };
  };
  
  export default useFetch;