import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type InvoiceItemUpdateInput = {
  description?: string | null;
  invoice?: InvoiceWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
  unitPrice?: number | null;
};
