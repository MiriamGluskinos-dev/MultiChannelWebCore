// import { useEffect, useState } from 'react';
import apiMocks from '../mocks/apiMocks.json';

interface ApiResponse {
    data: any;
    queryName?: string;
    error?: string;
}

const mockApiRequest = (queryParams: { queryName: keyof typeof apiMocks.queries;[key: string]: any }): Promise<ApiResponse> => {
    return new Promise((resolve) => {
        const filteredData = apiMocks.queries[queryParams.queryName];

        resolve({ data: filteredData });
    });
};

export default mockApiRequest;  

// export const useMockApiRequest = (queryParams: Record<string, any>) => {
//     const [response, setResponse] = useState<ApiResponse>({ data: [] });

//     useEffect(() => {
//         mockApiRequest(queryParams).then(setResponse);
//     }, [queryParams]);

//     return response;
// };