export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export interface ApiResponse {
    response: {
        data?: any;
        queryName?: string;
        error?: string | null;
        status?: 'pending' | 'success' | 'error';
    };
    refetch: () => Promise<void>;
}
export interface ApiRequest {
    url: string;
    method: ApiMethod;
    data?: any;
    mock?: boolean;
}
declare const useApiRequest: <T>(props: ApiRequest) => ApiResponse;
export default useApiRequest;
//# sourceMappingURL=useApiRequest.d.ts.map