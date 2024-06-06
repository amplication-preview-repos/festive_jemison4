import { Customer } from "../customer/Customer";
import { InvoiceItem } from "../invoiceItem/InvoiceItem";
import { User } from "../user/User";

export type Invoice = {
  createdAt: Date;
  customer?: Customer | null;
  dueDate: Date | null;
  id: string;
  invoiceItems?: Array<InvoiceItem>;
  issueDate: Date | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
