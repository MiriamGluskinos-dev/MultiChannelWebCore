import { useState, useEffect } from 'react';
import axiosInstance from './axios';
import mockApiRequest from './mockApiRequest';

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiResponse {
  response: {
    data?: any;
    queryName?: string;
    error?: string | null;
    status?: 'pending' | 'success' | 'error';
  },
  refetch: () => Promise<void>;
}

export interface ApiRequest {
  url: string;
  method: ApiMethod;
  data?: any;
  mock?: boolean;
  auto?: boolean;
}

const useApiRequest = <T,>(props: ApiRequest): ApiResponse => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { url, method, data, mock, auto= true} = props;

  const requestFn = mock
    ? (opts: ApiRequest) => mockApiRequest(opts.url, opts.method, opts.data)
    : (opts: ApiRequest) => axiosInstance(opts);

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

  useEffect(() => {
    if (auto) fetchData();
  }, [auto]);

  return {
    response: {
      data: response,
      error: error,
      status: loading ? 'pending' : error ? 'error' : 'success'
    },
    refetch: fetchData
  }
};

export default useApiRequest;
