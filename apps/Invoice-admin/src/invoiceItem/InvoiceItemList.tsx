import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InvoiceItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InvoiceItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="invoice ID" source="invoiceId" />
        <TextField label="quantity" source="quantity" />
        <TextField label="totalPrice" source="totalPrice" />
        <TextField label="unitPrice" source="unitPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
