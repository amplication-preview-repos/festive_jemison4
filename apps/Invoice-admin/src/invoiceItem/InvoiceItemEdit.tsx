import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const InvoiceItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <TextInput label="invoice ID" source="invoiceId" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <NumberInput label="unitPrice" source="unitPrice" />
      </SimpleForm>
    </Edit>
  );
};
