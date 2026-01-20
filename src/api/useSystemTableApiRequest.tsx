import useApiRequest from './useApiRequest';


const useSystemTableApiRequest = ({ tableName }: { tableName: string }) => {
  const systemTablesUrl = `/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=${tableName}`
  const { response, refetch } = useApiRequest({ url: systemTablesUrl, method: 'GET' });

  return {
    response,
    refetch
  };
};

export default useSystemTableApiRequest;