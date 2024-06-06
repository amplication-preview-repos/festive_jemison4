import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";

export type Invoice = {
  createdAt: Date;
  customer?: Customer | null;
  dueDate: Date | null;
  id: string;
  invoiceItems: JsonValue;
  issueDate: Date | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  userId: string | null;
};
