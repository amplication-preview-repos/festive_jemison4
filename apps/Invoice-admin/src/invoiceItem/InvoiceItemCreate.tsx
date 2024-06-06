import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const InvoiceItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <TextInput label="invoice ID" source="invoiceId" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <NumberInput label="unitPrice" source="unitPrice" />
      </SimpleForm>
    </Create>
  );
};
