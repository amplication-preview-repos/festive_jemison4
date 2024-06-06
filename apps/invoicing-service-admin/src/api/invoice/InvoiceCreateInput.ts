import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceItemCreateNestedManyWithoutInvoicesInput } from "./InvoiceItemCreateNestedManyWithoutInvoicesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  invoiceItems?: InvoiceItemCreateNestedManyWithoutInvoicesInput;
  issueDate?: Date | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
