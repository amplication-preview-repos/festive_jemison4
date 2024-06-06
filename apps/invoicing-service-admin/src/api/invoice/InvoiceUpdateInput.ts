import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  invoiceItems?: InvoiceItemUpdateManyWithoutInvoicesInput;
  issueDate?: Date | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
