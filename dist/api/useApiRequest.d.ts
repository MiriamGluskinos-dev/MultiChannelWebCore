export interface ApiResponse {
    response: {
        data?: any;
        queryName?: string;
        error?: string | null;
        status?: 'pending' | 'success' | 'error';
    };
}
export interface ApiRequest {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
}
declare const useApiRequest: <T>(props: ApiRequest) => ApiResponse;
export default useApiRequest;
//# sourceMappingURL=useApiRequest.d.ts.map