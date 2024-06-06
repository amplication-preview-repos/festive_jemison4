import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InvoiceItemList } from "./invoiceItem/InvoiceItemList";
import { InvoiceItemCreate } from "./invoiceItem/InvoiceItemCreate";
import { InvoiceItemEdit } from "./invoiceItem/InvoiceItemEdit";
import { InvoiceItemShow } from "./invoiceItem/InvoiceItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Invoice"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InvoiceItem"
          list={InvoiceItemList}
          edit={InvoiceItemEdit}
          create={InvoiceItemCreate}
          show={InvoiceItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
