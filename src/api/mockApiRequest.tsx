const mockApiRequest = async (url: string, method: string, data?: any) => {
    return new Promise<{ data: any }>((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    __mock__: true,
                    url,
                    method,
                    request: data,
                },
            });
        }, 200);
    });
};

export default mockApiRequest;