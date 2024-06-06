import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  invoiceItems?: SortOrder;
  issueDate?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
