import { useEffect, useState } from 'react';
import { RootLayout, MainSearchContainer, GenericTable } from '../../src/components';
import { useApiRequest, useSystemTableApiRequest } from '../../src/api';
import { Button, Table, TableHeader, TableRow } from '@igds/react';
import { useTranslation } from '../i18n/useTranslation.tsx';
import '../i18n/config.ts';
import './App.css';

const App = () => {
  const [click, setClick] = useState(false)
  const { t } = useTranslation();
  const { response } = useSystemTableApiRequest({
    tableName: 'CargoIdentifierType',
  });

  useEffect(() => {
    if (response) {
      console.log('PAGE: System Table data:', response.data);
    }
  }, [response.data]);

  const { response: res, refetch } = useApiRequest({
    url: '/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=CargoIdentifierType',
    method: 'GET',
    // mock: true,
    data: {
      color: 'green',
      font: '6'
    },
    auto: false
  });

  useEffect(() => {
    console.log('no data?', res.data);
  }, [res.data]);

  useEffect(() => {
    if (click) {
      console.log('refetching!!!!!!');
      refetch();
    }
  }, [click]);

  const { response: res2 } = useApiRequest({
    url: '/test/consume/meches/dealfile/rest/webdeclaration/v1/WebDeclaration/Entitlements?CustomerExternalId=321550550',
    headers: {
      'x-client-id': "token1",
      'x-client-secret': "token2",
      'x-scope': "token3",
    },
    method: 'GET',
  });

  useEffect(() => {
    console.log('--->', res2.data);
  }, [res2.data]);

  const headerWidth = 188;
  const headers: any = [
    { id: "faultProceduralNumber", name: t("FaultProceduralNumber"), width: headerWidth, slotted: true, type: "link", href: "http://", sortable: true },
    { id: "taxOffice", name: t("taxOffice"), width: headerWidth, sortable: true },
    { id: "declarationNum", name: t("declarationNum"), width: headerWidth, sortable: true },
    { id: "defectType", name: t("defectType"), width: headerWidth, sortable: true },
    { id: "agentStatement", name: t("agentStatement"), width: headerWidth, sortable: true },
    { id: "importerOrExporterDeclaration", name: t("importerOrExporterDeclaration"), width: headerWidth, sortable: true },
    { id: "dfectRegistrationDate", name: t("dfectRegistrationDate"), width: headerWidth, type: "date", sortable: true },
    { id: "dfectStatus", name: t("dfectStatus"), width: headerWidth, sortable: true },
    { id: "score", name: t("score"), width: headerWidth, sortable: true },
    { id: "comments", name: t("comments"), width: headerWidth, sortable: true }
  ];
  const rows = [
    {
      faultProceduralNumber: "996065",
      taxOffice: "אשדוד",
      declarationNum: 25024348119365,
      defectType: "סיווג שגוי",
      agentStatement: "די אייץ אל שילוח גלובלי ישראל בע'מ - 513046615",
      importerOrExporterDeclaration: "מ - נטפים בע'מ - 513769091",
      dfectRegistrationDate: "2026-01-26",
      dfectStatus: "מאושר",
      score: 5,
      InvoiceNumber: "513769091",
      component:
        <Table>
          <TableHeader headers={[{ id: "id", name: t("#") },
          { id: "route", name: t("route") },]} />

          {[1, 2].map((_, index) => (
            <TableRow
              key={index + 'k'}
              cells={[1, 'הצהרת ייצוא/שטעון [0] / חשבון [1] / סחורה [1] / הסכם סחר'].map((_) => ({
                value: "הצהרת ייצוא/שטעון [0] / חשבון [1] / סחורה [1] / הסכם סחר"
              }))}
            />
          ))}
        </Table>

    },
    {
      faultProceduralNumber: 454,
      taxOffice: "אשדוד",
      declarationNum: 25024348119365,
      defectType: "סיווג שגוי",
      agentStatement: "די אייץ אל שילוח גלובלי ישראל בע'מ - 513046615",
      importerOrExporterDeclaration: "מ - נטפים בע'מ - 513769091",
      dfectRegistrationDate: "2026-01-26",
      dfectStatus: "מאושר",
      score: 5,
      InvoiceNumber: "513769091",
      component: <h3>Hadas</h3>
    }
  ];

  return (
    <RootLayout>
      <MainSearchContainer
        pageTitle='Query Title Playground'
        info={{
          infoTitle: "Query Explanation Title",
          infoContent: "Query Explanation\nnew line"
        }}
        buttonsProps={{
          // isClearDisabled: false,
          // isSearchDisabled: true,
        }}
      >
        <div>I'm the content</div><br/>
        <Button onClick={() => setClick(true)}>Click to fetch Data</Button>
      </MainSearchContainer>
    </RootLayout>
  );
}

export default App;
