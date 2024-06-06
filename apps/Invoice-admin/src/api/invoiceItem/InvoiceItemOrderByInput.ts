import { SortOrder } from "../../util/SortOrder";

export type InvoiceItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
