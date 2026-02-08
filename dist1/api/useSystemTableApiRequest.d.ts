declare const useSystemTableApiRequest: ({ tableName }: {
    tableName: string;
}) => {
    response: {
        data?: any;
        queryName?: string;
        error?: string | null;
        status?: "pending" | "success" | "error";
    };
    refetch: () => Promise<void>;
};
export default useSystemTableApiRequest;
//# sourceMappingURL=useSystemTableApiRequest.d.ts.map