var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect } from 'react';
import axiosInstance from './axios';
import mockApiRequest from './mockApiRequest';
const useApiRequest = (props) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { url, method, data } = props;
    // Read env via Vite's client-side API `import.meta.env` (no `process` in browser).
    const env = import.meta.env;
    const useMock = true || env.VITE_USE_MOCK === 'true';
    // if mock status is true, return mock response from mockApiRequest
    const requestFn = useMock
        ? (opts) => mockApiRequest(opts.url, opts.method, opts.data)
        : (opts) => axiosInstance(opts);
    useEffect(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            try {
                console.log('API request:', url, method, data);
                const result = yield requestFn({ url, method, data });
                console.log('API response:', result.data);
                setResponse(result.data);
                setError(null);
            }
            catch (err) {
                console.error('API request error:', err);
                setError((err === null || err === void 0 ? void 0 : err.message) ? err : null);
                setResponse(null);
            }
            finally {
                setLoading(false);
            }
        });
        url && method && data && fetchData();
    }, [url, method, data]);
    return {
        response: {
            data: response,
            error: error,
            status: loading ? 'pending' : error ? 'error' : 'success'
        },
    };
};
export default useApiRequest;
