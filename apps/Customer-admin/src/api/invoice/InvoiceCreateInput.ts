import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type InvoiceCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  invoiceItems?: InputJsonValue;
  issueDate?: Date | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  userId?: string | null;
};
