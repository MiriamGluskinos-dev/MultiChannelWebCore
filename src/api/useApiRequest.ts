import { useState, useEffect } from 'react';
import axiosInstance from './axios';
import mockApiRequest from './mockApiRequest';

export interface ApiResponse {
  response: {
    data?: any;
    queryName?: string;
    error?: string | null;
    status?: 'pending' | 'success' | 'error';
  }
}

export interface ApiRequest {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
}

const useApiRequest = <T,>(props: ApiRequest): ApiResponse => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { url, method, data } = props;

  // Read env via Vite's client-side API `import.meta.env` (no `process` in browser).
  const env = (import.meta as any).env as Record<string, any>;
  const useMock = true || env.VITE_USE_MOCK === 'true';

  // if mock status is true, return mock response from mockApiRequest
  const requestFn = useMock
    ? (opts: ApiRequest) => mockApiRequest(opts.url, opts.method, opts.data)
    : (opts: ApiRequest) => axiosInstance(opts);

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);

      try {
        console.log('API request:', url, method, data);
        const result = await requestFn({ url, method, data });

        console.log('API response:', result.data);
        setResponse(result.data);
        setError(null);
      } catch (err: any) {
        console.error('API request error:', err);
        setError(err?.message ? err : null);
        setResponse(null);
      } finally {
        setLoading(false);
      }
    };

    url && method && data && fetchData();
  }, [url, method, data]);

  return {
    response: {
      data: response,
      error: error,
      status: loading ? 'pending' : error ? 'error' : 'success'
    },
  }
};

export default useApiRequest;
