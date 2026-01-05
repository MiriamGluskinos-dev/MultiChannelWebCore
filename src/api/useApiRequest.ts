import { useState, useEffect } from 'react';
import axiosInstance from './axios';

const useApiRequest = <T,>(url: string, method = 'get', data = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      debugger
      try {
        const result = await axiosInstance({
          url,
          method,
          data
        });
        console.log('API response:', result.data);
        setResponse(result.data);
      } catch (err: any) {
        console.error('API request error:', error);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, data]);

  return { response, error, loading };
};

export default useApiRequest;
